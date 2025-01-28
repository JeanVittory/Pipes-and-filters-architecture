import { IFilterResult } from '../models/filters';

export const counterFilter = (stream: IFilterResult): IFilterResult => {
  const { text, filtersApplied, category } = stream;
  const wordsLength = wordsCounter(text);
  const newlinesLength = newlineCounter(text);
  const characterLength = characterCounter(text);

  return {
    text,
    filtersApplied: [...filtersApplied, 'counter filter'],
    category,
    counter: {
      words: wordsLength,
      lines: newlinesLength,
      characters: characterLength,
    },
  };
};

const wordsCounter = (stream: string): number => {
  return stream.split(' ').length;
};

const newlineCounter = (stream: string) => {
  return (stream.match(/\n/g) || []).length;
};

const characterCounter = (stream: string) => {
  return stream.length;
};
