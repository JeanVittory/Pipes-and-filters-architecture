import { NextFunction, Request, Response } from 'express';
import { extractFileDetails } from '../utils/logger';
import logger from '../config/logs/winston';
import { BadRequest } from '../models/errorHandler';
import { MAX_FILE_SIZE_IN_BYTES } from '../constants';

export const uploadFileMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(`Executing function uploadFileMiddleware...`);

  const fileDetails = extractFileDetails(req.file);

  if (!req.file) {
    logger.error(
      `${fileDetails}\nThe property file do not exist within request object`
    );
    res.status(BadRequest.code).json({ error: BadRequest.message });
    return;
  }

  if (!req.file.buffer) {
    logger.error(
      `${fileDetails}\nThe property buffer do not exist within file object`
    );
    res.status(BadRequest.code).json({ error: BadRequest.message });
    return;
  }

  if (!req.file.buffer.length) {
    logger.error(`${fileDetails}\nThe property buffer do not contains data`);
    res.status(BadRequest.code).json({ error: BadRequest.message });
    return;
  }

  if (req.file.size <= 0) {
    logger.error(
      `${fileDetails}\nThe file size has ${req.file.size} and must be greater than 0`
    );
    res.status(BadRequest.code).json({ error: BadRequest.message });
    return;
  }
  if (req.file.size > MAX_FILE_SIZE_IN_BYTES) {
    logger.error(
      `${fileDetails}\nThe file size has ${req.file.size} and must be less than ${MAX_FILE_SIZE_IN_BYTES}`
    );
    res.status(BadRequest.code).json({ error: BadRequest.message });
    return;
  }

  next();
};
