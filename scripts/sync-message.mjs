import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { analyzeCommits } from "@semantic-release/commit-analyzer";

const conventional = /^([a-z]+)(?:\([^)\r\n]+\))?(!)?:\s+(.+)$/;

export async function buildMessage(component, commits) {
  if (!["frontend", "backend"].includes(component))
    throw new Error("Invalid component");
  if (!commits.length) throw new Error("No commits to integrate");
  const parsed = [];
  for (const commit of commits) {
    const message = commit.message.trim();
    const header = message.split(/\r?\n/)[0];
    const match = header.match(conventional);
    const normalized =
      match?.[2] && !/^BREAKING[ -]CHANGE:\s*/m.test(message)
        ? message + "\n\nBREAKING CHANGE: " + match[3]
        : message;
    const release = await analyzeCommits(
      {},
      {
        commits: [{ ...commit, message: normalized }],
        logger: { log() {} },
      },
    );
    parsed.push({ ...commit, header, match, release, normalized });
  }
  // Analyze the batch as well so reverted commits are treated like semantic-release.
  const release = await analyzeCommits(
    {},
    {
      commits: parsed.map((c) => ({ hash: c.hash, message: c.normalized })),
      logger: { log() {} },
    },
  );
  const strongest = parsed.filter((c) => c.release === release && release);
  const representative = strongest[0];
  const types = new Set(parsed.map((c) => c.match?.[1] ?? "chore"));
  const type =
    release === "major" || release === "minor"
      ? "feat"
      : release === "patch"
        ? strongest.every((c) => c.match?.[1] === "perf")
          ? "perf"
          : "fix"
        : types.size === 1 &&
            [
              "refactor",
              "docs",
              "style",
              "test",
              "build",
              "ci",
              "chore",
            ].includes([...types][0])
          ? [...types][0]
          : "chore";
  const description =
    representative?.match?.[3] ?? "integrate " + component + " changes";
  const prefix =
    type + "(" + component + ")" + (release === "major" ? "!" : "") + ": ";
  const header = prefix + description.slice(0, 100 - prefix.length);
  const lines = [
    header,
    "",
    "Integrated commits:",
    ...parsed.map((c) => "- " + c.hash.slice(0, 12) + " " + c.header),
  ];
  if (release === "major") {
    const details = strongest.map((c) => {
      const note = c.normalized.match(/^BREAKING[ -]CHANGE:\s*([\s\S]*)/m);
      return (note?.[1]?.trim() || c.header).replace(/\r?\n/g, " ");
    });
    lines.push("", "BREAKING CHANGE: " + details.join("; "));
  }
  return lines.join("\n");
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const [component, base, target] = process.argv.slice(2);
  const output = execFileSync(
    "git",
    [
      "log",
      "--reverse",
      "--no-merges",
      "--format=%H%x00%B%x00",
      base + ".." + target,
      "--",
      ".",
      ":(exclude).github/workflows/**",
    ],
    { encoding: "utf8" },
  );
  const fields = output.split("\0");
  const commits = [];
  for (let i = 0; i + 1 < fields.length; i += 2) {
    if (fields[i].trim())
      commits.push({ hash: fields[i].trim(), message: fields[i + 1] });
  }
  // A merge-only change may have no matching non-merge commits.
  if (!commits.length)
    commits.push({ hash: target, message: "chore: integrate merge changes" });
  console.log(await buildMessage(component, commits));
}
