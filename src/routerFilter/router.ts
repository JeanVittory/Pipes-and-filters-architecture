import logger from '../config/logs/winston';
import { CATEGORIES, CATEGORIES_ROUTE_TYPE } from '../models/categories';
import { IFilterResult } from '../models/filters';
import { advertisementRoute } from './routes/advertisementRoute';
import { informationRoute } from './routes/informationRoute';
import { urgentRoute } from './routes/urgentRoute';

export const router = (stream: IFilterResult) => {
  logger.verbose('Executing router function...');

  const routerMap = {
    urgente: urgentRoute,
    informacion: informationRoute,
    publicidad: advertisementRoute,
  };

  if (stream.category === CATEGORIES.UNKNOWN) return stream;

  const route = routerMap[stream.category as CATEGORIES_ROUTE_TYPE];
  const result = route(stream);

  logger.verbose('Finishing router function...');

  return result;
};
