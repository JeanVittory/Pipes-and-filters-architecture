import express from 'express';
import { EACCES, EADDRINUSE, PORT, PREFIX_API } from '../constants';
import router from '../routes';
import { errorHandler } from './middlewares/errorHandler';

function init() {
  const app = express();

  app.use(PREFIX_API, router);

  app.use(errorHandler);

  const server = app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });

  server.on('error', (error) => {
    if (error.name === EADDRINUSE) {
      console.log(`Port ${PORT} is already in use.`);
    } else if (error.name === EACCES) {
      console.log(`Insufficient privileges to bind to port ${PORT}.`);
    } else {
      console.error(`An error occurred: ${error.message}`);
    }
    process.exit(1);
  });
}

export default init;
