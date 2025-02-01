import { Request, Response } from 'express';
import logger from '../config/logs/winston';
import { initializeProcess } from '../service/initializeProcess';
import { DECODE_FORMAT } from '../constants';

export const loadFileController = (req: Request, res: Response) => {
  logger.verbose(`Executing function loadFileController...`);
  const { file } = req;

  logger.info(`Processing file: ${file?.filename}`);

  const fileContent = file?.buffer.toString(DECODE_FORMAT);
  const dataProcessed = initializeProcess(fileContent!);

  logger.info(`Applied filters: ${dataProcessed.filtersApplied.join(', ')}`);

  logger.info(`Category: ${dataProcessed.category}`);

  logger.info(`Summary: 
    Words: ${dataProcessed.counter?.words},
    Lines: ${dataProcessed.counter?.lines},
    Characters: ${dataProcessed.counter?.characters}
  `);

  logger.verbose(`Finishing function loadFileController...`);

  res.status(200).json(dataProcessed);
};
