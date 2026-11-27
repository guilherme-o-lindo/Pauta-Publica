import { test, expect } from "@playwright/test";

for (const viewport of [
  { name: "desktop", width: 1280, height: 900 },
  { name: "mobile", width: 390, height: 844 },
]) {
  test("visual regression " + viewport.name, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const section = page.locator("#visualization");
    for (const [name, title] of [
      ["bars", "Barras"],
      ["lines", "Linhas"],
      ["area", "Área"],
      ["donut", "Distribuição"],
      ["stacked", "Composição"],
      ["map", "Teste de geometria sintética (não territorial)"],
    ]) {
      const figure = section.getByRole("figure", { name: title, exact: true });
      await expect(figure.locator("svg").first()).toBeVisible();
      await figure.scrollIntoViewIfNeeded();
      await expect(figure).toHaveScreenshot(name + "-" + viewport.name + ".png", {
        animations: "disabled",
        caret: "hide",
        scale: "css",
        maxDiffPixelRatio: 0.005,
      });
    }
  });
}
