import type { EChartsCoreOption } from "echarts/core";
import type { ChartData, ChartKind } from "../../types/visualization";
import { formatValue } from "./format";
export const chartColors = ["#35678c", "#a56b26", "#75638b", "#3b807d", "#92596b", "#626c78"];
export function chartOptions(data: ChartData, kind: ChartKind): EChartsCoreOption {
  const base = {
    color: chartColors,
    animation: false,
    aria: { enabled: true, decal: { show: true } },
    tooltip: {
      trigger: kind === "donut" ? "item" : "axis",
      confine: true,
      renderMode: "richText",
      valueFormatter: (value: unknown) => formatValue(typeof value === "number" ? value : null),
    },
  };
  if (kind === "donut")
    return {
      ...base,
      series: [
        {
          type: "pie",
          radius: ["42%", "72%"],
          label: { show: true, formatter: "{b}: {d}%" },
          data: data.categories
            .map((name, i) => ({ name, value: data.series[0]?.values[i] ?? null }))
            .filter((x) => x.value !== null && Number.isFinite(x.value) && x.value >= 0),
        },
      ],
    };
  return {
    ...base,
    grid: { left: 16, right: 16, top: 24, bottom: 24, containLabel: true },
    xAxis: { type: "category", data: data.categories, axisLabel: { hideOverlap: true } },
    yAxis: { type: "value", axisLabel: { formatter: (value: number) => formatValue(value) } },
    series: data.series.map((s) => ({
      name: s.name,
      type: kind === "bar" || kind === "stacked" ? "bar" : "line",
      data: data.categories.map((_, i) => s.values[i] ?? null),
      connectNulls: false,
      ...(kind === "area" ? { areaStyle: { opacity: 0.18 } } : {}),
      ...(kind === "stacked" ? { stack: "total" } : {}),
    })),
  };
}
