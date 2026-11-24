import { execFileSync, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const command = process.argv[2];
const args = process.argv.slice(3);
const listing = execFileSync("git", ["worktree", "list", "--porcelain"], {
  encoding: "utf8",
});
const develop = listing
  .split(/\r?\n\r?\n/)
  .find((block) => block.split(/\r?\n/).includes("branch refs/heads/develop"));
const root = develop?.split(/\r?\n/)[0].slice("worktree ".length);
if (!root || !existsSync(join(root, "scripts", "maintenance.ps1"))) {
  console.error("Worktree develop nao encontrada ou scripts indisponiveis.");
  process.exit(1);
}
const pnpm = process.env.npm_execpath;
if (!pnpm) {
  console.error("Execute este comando usando pnpm run.");
  process.exit(1);
}
const native = pnpm.toLowerCase().endsWith(".exe");
const result = spawnSync(
  native ? pnpm : process.execPath,
  [...(native ? [] : [pnpm]), "run", command, ...args],
  {
    cwd: root,
    stdio: "inherit",
  },
);
if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
