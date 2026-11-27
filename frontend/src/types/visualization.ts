export interface ChartSeries {
  name: string;
  values: (number | null)[];
}
export interface ChartData {
  categories: string[];
  series: ChartSeries[];
}
export interface ChartMetadata {
  source: string;
  sourceUrl?: string;
  updatedAt?: string;
  description: string;
  disclaimer?: string;
}
export type ChartKind = "bar" | "line" | "area" | "stacked" | "donut";
