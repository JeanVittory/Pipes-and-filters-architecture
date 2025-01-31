import logger from '../../config/logs/winston';
import { IFilterResult } from '../../models/filters';

export const uppercaseFilter = (stream: IFilterResult): IFilterResult => {
  logger.verbose('Executing uppercaseFilter function');
  return {
    text: stream.text.toUpperCase(),
    filtersApplied: [...stream.filtersApplied, 'uppercase filter'],
    category: stream.category,
  };
};
