import logger from '../config/logs/winston';
import { classifierFilter } from '../filters/classifierFilter';
import { cleanerFilter } from '../filters/cleanerFilter';
import { pipe } from '../pipes/pipe';

export const initializeProcess = (stream: string) => {
  logger.verbose('Executing initializeProcess function...');
  const result = pipe(stream, [cleanerFilter, classifierFilter]);
  console.log('result', result);
};
