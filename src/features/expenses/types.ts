export interface Expense {
  id: string;
  category: string;
  date: string;
  amount: number | null;
  description: string;
  source: string;
}
