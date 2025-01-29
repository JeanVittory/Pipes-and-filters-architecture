import { HIGHLIGHT_URGENT } from '../../constants';
import { IFilterResult } from '../../models/filters';

export const highlightFilter = (stream: IFilterResult): IFilterResult => {
  const { text, filtersApplied } = stream;
  return {
    ...stream,
    text: `${HIGHLIGHT_URGENT} ${text}`,
    filtersApplied: [...filtersApplied, 'highligh filter'],
  };
};
