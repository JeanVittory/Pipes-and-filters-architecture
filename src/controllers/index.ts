import { Request, Response } from 'express';
import logger from '../config/logs/winston';
import { initializeProcess } from '../service/initializeProcess';

export const loadFileController = (req: Request, res: Response) => {
  logger.info(`Executing function loadFileController...`);
  const { file } = req;
  const fileContent = file?.buffer.toString('utf-8');
  initializeProcess(fileContent!);
};
