import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = ["primitives", "semantic", "components"]
  .map((name) =>
    readFileSync(new URL("../src/styles/tokens/" + name + ".css", import.meta.url), "utf8"),
  )
  .join("\n");
const tokens = new Map(
  Array.from(css.matchAll(/(--[\w-]+):\s*([^;]+);/g), (m) => [m[1]!, m[2]!.trim()]),
);
function resolve(name: string, seen = new Set<string>()): string {
  if (seen.has(name)) throw new Error("Circular token: " + name);
  const value = tokens.get(name);
  if (!value) throw new Error("Missing token: " + name);
  const ref = value.match(/^var\((--[\w-]+)\)$/);
  return ref ? resolve(ref[1]!, new Set([...seen, name])) : value;
}
function luminance(hex: string) {
  const rgb = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return rgb[0]! * 0.2126 + rgb[1]! * 0.7152 + rgb[2]! * 0.0722;
}
function contrast(a: string, b: string) {
  const values = [luminance(resolve(a)), luminance(resolve(b))].sort((x, y) => y - x);
  return (values[0]! + 0.05) / (values[1]! + 0.05);
}
describe("design tokens", () => {
  it("resolves all custom-property references", () => {
    for (const match of css.matchAll(/var\((--[\w-]+)\)/g))
      expect(() => resolve(match[1]!)).not.toThrow();
  });
  it.each(["success", "warning", "error", "info"])(
    "%s text passes WCAG AA on its soft surface",
    (tone) => {
      expect(contrast("--" + tone + "-fg", "--" + tone + "-bg")).toBeGreaterThanOrEqual(4.5);
    },
  );
  it.each([
    ["--foreground", "--background"],
    ["--muted-foreground", "--card"],
    ["--muted-foreground", "--muted"],
    ["--primary-foreground", "--primary"],
  ])("text contrast %s / %s", (fg, bg) => {
    expect(contrast(fg, bg)).toBeGreaterThanOrEqual(4.5);
  });
  it("keeps focus and input borders visible on paper and white", () => {
    for (const surface of ["--background", "--card"]) {
      expect(contrast("--ring", surface)).toBeGreaterThanOrEqual(3);
      expect(contrast("--input", surface)).toBeGreaterThanOrEqual(3);
    }
  });
});
