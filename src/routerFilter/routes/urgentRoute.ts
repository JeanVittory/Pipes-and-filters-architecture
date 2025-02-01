import logger from '../../config/logs/winston';
import { highlightFilter } from '../../filters/urgentRoute/highlightFilter';
import { uppercaseFilter } from '../../filters/urgentRoute/uppercaseFilter';
import { IFilterResult } from '../../models/filters';
import { pipe } from '../../pipes/pipe';

export const urgentRoute = (stream: IFilterResult): IFilterResult => {
  logger.verbose('Executing urgentRoute function...');

  return pipe(stream, [highlightFilter, uppercaseFilter]);
};
