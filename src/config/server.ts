import express from 'express';
import { EACCES, EADDRINUSE, PORT, PREFIX_API } from '../constants';
import router from '../routes';
import { errorHandler } from '../middlewares/errorHandler';
import logger from './logs/winston';
import { loadClassifier } from './bayesian/loadData';

function init() {
  const app = express();

  app.use(PREFIX_API, router);

  app.use(errorHandler);

  loadClassifier();

  const server = app.listen(PORT, () => {
    logger.verbose(`Server running at port ${PORT}`);
  });

  server.on('error', (error) => {
    if (error.name === EADDRINUSE) {
      logger.error(`Port ${PORT} is already in use.`);
    } else if (error.name === EACCES) {
      logger.error(`Insufficient privileges to bind to port ${PORT}.`);
    } else {
      logger.error(`An error occurred: ${error.message}`);
    }
    process.exit(1);
  });
}

export default init;
