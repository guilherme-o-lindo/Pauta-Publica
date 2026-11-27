export interface VoteCount {
  label: string;
  value: number | null;
}
export interface Voting {
  id: string;
  title: string;
  date: string;
  result: string;
  counts: VoteCount[];
  source: string;
  href?: string;
}
