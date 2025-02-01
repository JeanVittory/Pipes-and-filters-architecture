import logger from '../../config/logs/winston';
import { IFilterResult } from '../../models/filters';

export const capitalizeFilter = (stream: IFilterResult) => {
  logger.verbose('Executing capitalizeFilter function');

  const { text, filtersApplied } = stream;
  const textCapitalized = text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    ...stream,
    text: textCapitalized,
    filtersApplied: [...filtersApplied, 'capitalize filter'],
  };
};
