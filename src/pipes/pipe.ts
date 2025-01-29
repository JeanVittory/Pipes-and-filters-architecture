import logger from '../config/logs/winston';
import { IFilterResult } from '../models/filters';

export const pipe = (
  stream: string | IFilterResult,
  filters: Function[]
): IFilterResult => {
  logger.verbose('Executing pipe function...');

  const result = filters.reduce((acc: string | IFilterResult, filter) => {
    return filter(acc);
  }, stream);

  return result as IFilterResult;
};
