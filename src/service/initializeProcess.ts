import logger from '../config/logs/winston';
import { cleanerFilter } from '../filters/cleanerFilter';

export const initializeProcess = (stream: string) => {
  logger.info('Executing initializeProcess function...');

  const streamCleaned = cleanerFilter(stream);
};
