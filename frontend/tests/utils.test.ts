import { describe, expect, it } from "vitest";
import { cn } from "../src/lib/utils";
describe("cn", () => {
  it("combines classes and resolves conflicts", () => {
    expect(cn("px-2", false, { "font-bold": true }, "px-4")).toBe("font-bold px-4");
  });
});
