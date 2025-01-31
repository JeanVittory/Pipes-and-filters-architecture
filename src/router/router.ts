import logger from '../config/logs/winston';
import { highlightFilter } from '../filters/urgentRoute/highlightFilter';
import { uppercaseFilter } from '../filters/urgentRoute/uppercaseFilter';
import { CATEGORIES_TYPE } from '../models/categories';
import { IFilterResult } from '../models/filters';
import { pipe } from '../pipes/pipe';

const urgentRoute = (stream: IFilterResult): IFilterResult => {
  logger.verbose('Executing urgentRoute function...');

  return pipe(stream, [highlightFilter, uppercaseFilter]);
};

const routerMap = {
  urgente: urgentRoute,
};

export const router = (stream: IFilterResult) => {
  logger.verbose('Executing router function...');

  const route = routerMap[stream.category as CATEGORIES_TYPE];
  const result = route(stream);

  console.log(result.text);
};
