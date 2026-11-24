import test from "node:test";
import assert from "node:assert/strict";
import { analyzeCommits } from "@semantic-release/commit-analyzer";
import { buildMessage } from "./sync-message.mjs";

const examples = [
  [
    ["feat: add search", "fix: correct filters"],
    "feat(frontend): add search",
    "minor",
  ],
  [["fix: repair filters"], "fix(frontend): repair filters", "patch"],
  [["perf: speed up search"], "perf(frontend): speed up search", "patch"],
  [["docs: update guide"], "docs(frontend): integrate frontend changes", null],
  [
    ["chore: tidy", "refactor: reorganize"],
    "chore(frontend): integrate frontend changes",
    null,
  ],
  [["feat!: change API"], "feat(frontend)!: change API", "major"],
  [
    ["fix: change API\n\nBREAKING CHANGE: remove old endpoint"],
    "feat(frontend)!: change API",
    "major",
  ],
];
for (const [messages, expected, release] of examples) {
  test(expected, async () => {
    const commits = messages.map((message, i) => ({
      hash: String(i + 1).padStart(40, "0"),
      message,
    }));
    const result = await buildMessage("frontend", commits);
    assert.equal(result.split("\n")[0], expected);
    assert.match(result, /Integrated commits:/);
    const actual = await analyzeCommits(
      {},
      { commits: [{ message: result }], logger: { log() {} } },
    );
    assert.equal(actual, release);
  });
}
