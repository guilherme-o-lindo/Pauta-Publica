import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("keyboard skip link and search dialog", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Ir para o conteúdo principal" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.getByRole("button", { name: "Buscar", exact: true }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await dialog.getByRole("searchbox").fill("visualizacao");
  await expect(dialog.getByRole("link", { name: "Visualização" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
});
test("automated WCAG checks on visualization section", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.locator("#visualization figure").first()).toBeVisible();
  const results = await new AxeBuilder({ page })
    .include("#visualization")
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  await testInfo.attach("axe-results", {
    body: JSON.stringify(results.violations, null, 2),
    contentType: "application/json",
  });
  expect(
    results.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.map((n) => n.target),
    })),
  ).toEqual([]);
});
