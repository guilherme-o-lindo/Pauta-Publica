// @vitest-environment jsdom
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { formatValue } from "../src/lib/visualization/format";
import { chartOptions } from "../src/lib/visualization/options";
import ChartDataTable from "../src/components/data-visualization/accessibility/ChartDataTable.vue";
import ChartContainer from "../src/components/data-visualization/primitives/ChartContainer.vue";
import MetricComparison from "../src/components/data-visualization/metrics/MetricComparison.vue";
import BrazilMap from "../src/components/data-visualization/maps/BrazilMap.vue";
import type { ChartData } from "../src/types/visualization";
const data: ChartData = {
  categories: ["A", "B", "C"],
  series: [{ name: "Total", values: [0, null, -5] }],
};
const metadata = {
  source: "Dados fictícios",
  description: "Demonstração",
  disclaimer: "Sem dados oficiais",
};
describe("data visualization", () => {
  it("distinguishes zero, null and nonfinite values", () => {
    expect(formatValue(0)).toBe("0");
    expect(formatValue(null)).toBe("Não disponível");
    expect(formatValue(NaN)).toBe("Não disponível");
    expect(formatValue(1234.5, { minimumFractionDigits: 2 })).toBe("1.234,50");
  });
  it.each(["bar", "line", "area", "stacked"] as const)("preserves values in %s", (kind) => {
    const option = chartOptions(data, kind);
    const series = option.series as {
      data: (number | null)[];
      type: string;
      stack?: string;
      areaStyle?: unknown;
    }[];
    expect(series[0]?.data).toEqual([0, null, -5]);
    expect(series[0]?.type).toBe(kind === "bar" || kind === "stacked" ? "bar" : "line");
    if (kind === "stacked") expect(series[0]?.stack).toBe("total");
    if (kind === "area") expect(series[0]?.areaStyle).toBeDefined();
  });
  it("excludes missing and negative values from donut", () => {
    const option = chartOptions(
      { categories: ["A", "B", "C", "D"], series: [{ name: "Total", values: [10, 0, -5, null] }] },
      "donut",
    );
    expect((option.series as { data: unknown[] }[])[0]?.data).toEqual([
      { name: "A", value: 10 },
      { name: "B", value: 0 },
    ]);
  });
  it("exposes a table with missing values", () => {
    const w = mount(ChartDataTable, { props: { data, caption: "Dados" } });
    expect(w.get("tbody").text()).toContain("Não disponível");
    expect(w.get("tbody").text()).toContain("0");
  });
  it("provides metadata and accessible alternatives", () => {
    const w = mount(ChartContainer, { props: { title: "Exemplo", data, metadata } });
    expect(w.get("figure").attributes("aria-labelledby")).toBe(
      w.get("figcaption").attributes("id"),
    );
    expect(w.get("details summary").text()).toContain("Ver dados em tabela");
    expect(w.text()).toContain(metadata.source);
    expect(w.text()).toContain(metadata.disclaimer);
  });
  it("does not render an invented map without geometry", () => {
    const w = mount(BrazilMap, {
      props: { title: "Mapa", values: [{ name: "Ceará", value: 0 }], metadata },
    });
    expect(w.text()).toContain("Geometria territorial verificada não disponível");
    expect(w.get("table").text()).toContain("Ceará");
  });
  it("does not infer a comparison from missing values", () => {
    const w = mount(MetricComparison, { props: { label: "Exemplo", current: 10, previous: null } });
    expect(w.text()).toContain("Variação absoluta: Não disponível");
  });
});
