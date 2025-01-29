import logger from '../config/logs/winston';
import { highlightFilter } from '../filters/urgentRoute/highlightFilter';
import { CATEGORIES_TYPE } from '../models/categories';
import { IFilterResult } from '../models/filters';
import { pipe } from '../pipes/pipe';

const urgentRoute = (stream: IFilterResult): IFilterResult => {
  logger.verbose('Executing urgentRoute function...');

  return pipe(stream, [highlightFilter]);
};

const routerMap = {
  urgente: urgentRoute,
  informacion: '',
  publicidad: '',
  otros: '',
};

export const router = (stream: IFilterResult) => {
  logger.verbose('Executing router function...');

  const result = routerMap[stream.category as CATEGORIES_TYPE];
};
