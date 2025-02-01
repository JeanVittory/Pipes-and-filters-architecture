import logger from '../../config/logs/winston';
import { IFilterResult } from '../../models/filters';

export const advertisementFilter = (stream: IFilterResult) => {
  logger.verbose('Executing advertisementFilter');

  const { text, filtersApplied } = stream;

  return {
    ...stream,
    text: `¡${text}!`,
    filtersApplied: [...filtersApplied, 'advertisement filter'],
  };
};
