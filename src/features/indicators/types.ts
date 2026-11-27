export interface Indicator {
  id: string;
  label: string;
  value: number | null;
  previous?: number | null;
  period: string;
  source: string;
  format?: Intl.NumberFormatOptions;
}
