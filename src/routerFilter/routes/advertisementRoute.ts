import logger from '../../config/logs/winston';
import { advertisementFilter } from '../../filters/advertisementRoute/advertisementFilter';
import { IFilterResult } from '../../models/filters';
import { pipe } from '../../pipes/pipe';

export const advertisementRoute = (stream: IFilterResult): IFilterResult => {
  logger.verbose('Executing advertisementRoute function...');

  return pipe(stream, [advertisementFilter]);
};
