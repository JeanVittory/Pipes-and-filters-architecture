import { Request, Response } from 'express';
import logger from '../config/logs/winston';
import { initializeProcess } from '../service/initializeProcess';
import { DECODE_FORMAT } from '../constants';
import { awsLogger } from '../config/cloudwatch/sendLogs';

export const loadFileController = (req: Request, res: Response) => {
  logger.verbose(`Executing function loadFileController...`);
  const { file } = req;

  logger.verbose(`Processing file: ${file?.filename}`);

  const fileContent = file?.buffer.toString(DECODE_FORMAT);
  const dataProcessed = initializeProcess(fileContent!);

  awsLogger(`Processed file: ${file?.originalname}`, 'info');

  awsLogger(
    `Applied filters: ${dataProcessed.filtersApplied.join(', ')}`,
    'info'
  );

  awsLogger(`Category: ${dataProcessed.category}`, 'info');

  awsLogger(
    `Words: ${dataProcessed.counter?.words}, Lines: ${dataProcessed.counter?.lines}, Characters: ${dataProcessed.counter?.characters}`,
    'info'
  );

  logger.verbose(`Finishing function loadFileController...`);

  res.status(200).json(dataProcessed);
};
