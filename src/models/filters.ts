export interface IFilterResult {
  text: string;
  filtersApplied: string[];
  category?: string;
  counter?: ICounter;
}

interface ICounter {
  words: number;
  lines: number;
  characters: number;
}
