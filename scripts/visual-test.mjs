import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const result = spawnSync(
  process.execPath,
  [require.resolve("@playwright/test/cli"), "test", "visual-regression", ...process.argv.slice(2)],
  { stdio: "inherit", env: { ...process.env, PP_VISUAL: "1" } },
);
process.exitCode = result.status ?? 1;
