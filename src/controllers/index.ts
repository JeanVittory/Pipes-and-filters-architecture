import { Request, Response } from 'express';
import logger from '../config/logs/winston';
import { initializeProcess } from '../service/initializeProcess';

export const loadFileController = (req: Request, res: Response) => {
  logger.verbose(`Executing function loadFileController...`);
  const { file } = req;
  const fileContent = file?.buffer.toString('utf-8');
  const dataProcessed = initializeProcess(fileContent!);

  logger.verbose(`Finishing function loadFileController...`);
  res.status(200).json(dataProcessed);
};
