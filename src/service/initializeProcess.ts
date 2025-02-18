import logger from '../config/logs/winston';
import { classifierFilter } from '../filters/classifierFilter';
import { cleanerFilter } from '../filters/cleanerFilter';
import { counterFilter } from '../filters/counterFilter';
import { pipe } from '../pipes/pipe';
import { router } from '../routerFilter/router';

export const initializeProcess = (stream: string) => {
  logger.verbose('Executing initializeProcess function...');

  const dataCleaned = pipe(stream, [
    cleanerFilter,
    classifierFilter,
    counterFilter,
  ]);

  const dataFromRouter = router(dataCleaned);

  logger.verbose('Finishing initializeProcess function...');

  return dataFromRouter;
};
