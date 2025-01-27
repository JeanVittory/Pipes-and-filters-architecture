import logger from '../config/logs/winston';
import { cleanerFilter } from '../filters/cleanerFilter';
import { pipe } from '../pipes/pipe';

export const initializeProcess = (stream: string) => {
  logger.verbose('Executing initializeProcess function...');
  const result = pipe(stream, [cleanerFilter]);
};
