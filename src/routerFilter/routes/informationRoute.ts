import logger from '../../config/logs/winston';
import { capitalizeFilter } from '../../filters/informationRoute/capitalizeFilter';
import { IFilterResult } from '../../models/filters';
import { pipe } from '../../pipes/pipe';

export const informationRoute = (stream: IFilterResult): IFilterResult => {
  logger.verbose('Executing informationRoute function...');

  return pipe(stream, [capitalizeFilter]);
};
