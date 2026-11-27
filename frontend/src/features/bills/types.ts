export interface LegislativeEvent {
  id: string;
  date: string;
  label: string;
  description?: string;
}
export interface Bill {
  code: string;
  summary: string;
  status: string;
  href?: string;
  source?: string;
}
