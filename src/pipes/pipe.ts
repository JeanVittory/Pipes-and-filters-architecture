import logger from '../config/logs/winston';

export const pipe = (
  stream: string | number,
  filters: Function[]
): string | number => {
  logger.verbose('Executing pipe function...');

  return filters.reduce((acc, filter) => {
    return filter(acc);
  }, stream);
};
