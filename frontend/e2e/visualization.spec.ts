import { test, expect } from "@playwright/test";
test("renders all five chart types at a nonzero size without runtime errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  const section = page.locator("#visualization");
  await expect(section.getByRole("figure", { name: "Barras", exact: true })).toBeVisible();
  for (const title of ["Barras", "Linhas", "Área", "Distribuição", "Composição"]) {
    const chart = section.getByRole("figure", { name: title, exact: true });
    const svg = chart.locator("svg").first();
    await expect(svg).toBeVisible();
    const bounds = await svg.boundingBox();
    expect(bounds?.width).toBeGreaterThan(0);
    expect(bounds?.height).toBeGreaterThan(0);
    await expect(svg.locator("path").first()).toBeAttached();
    await chart.locator("summary").click();
    await expect(chart.getByRole("table")).toBeVisible();
  }
  expect(errors).toEqual([]);
});
test("resizes charts on mobile and keeps the page within the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const chart = page.locator("#visualization figure").first();
  await expect(chart.locator("svg").first()).toBeVisible();
  expect(await page.locator("html").evaluate((el) => el.scrollWidth)).toBeLessThanOrEqual(391);
  await page.setViewportSize({ width: 800, height: 900 });
  await expect
    .poll(async () => (await chart.locator("svg").first().boundingBox())?.width ?? 0)
    .toBeGreaterThan(390);
});
test("map provides a truthful fallback and tabular data when geometry is missing", async ({
  page,
}) => {
  await page.goto("/");
  const chart = page.locator("#visualization figure").filter({ hasText: "Mapa brasileiro" });
  await expect(
    chart.getByText("Geometria territorial verificada não disponível.", { exact: false }),
  ).toBeVisible();
  await chart.locator("summary").click();
  await expect(chart.getByRole("table")).toContainText("Ceará");
});

test("renders synthetic map polygons, legend and data without runtime errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  const map = page.locator("#visualization").getByRole("figure", { name: /Teste de geometria/ });
  const svg = map.locator("svg").first();
  await expect(svg).toBeVisible();
  expect((await svg.boundingBox())?.height).toBeGreaterThan(0);
  expect(await svg.locator("path").count()).toBeGreaterThanOrEqual(3);
  await expect(map.getByText("Geometria: Fixture", { exact: false })).toBeVisible();
  await map.locator("summary").click();
  await expect(map.getByRole("table")).toContainText("20");
  expect(errors).toEqual([]);
});

test("regional map renders its explicitly synthetic geometry", async ({ page }) => {
  await page.goto("/");
  const map = page.locator("#visualization").getByRole("figure", { name: /Regi.o Nordeste/ });
  await expect(map.locator("svg").first()).toBeVisible();
  await expect(map.getByText("Fixture", { exact: false })).toBeVisible();
});
