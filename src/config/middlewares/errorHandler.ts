import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import multer from 'multer';
import { BadRequest, InternalServerError } from '../../models/errorHandler';
import { MULTER_MESSAGE_ERROR_EXT_FILE } from '../../constants';
import logger from '../logs/winston';

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof multer.MulterError) {
    logger.error(BadRequest.message);
    res.status(BadRequest.code).json({ error: BadRequest.message });
    return;
  }

  if (err.message === MULTER_MESSAGE_ERROR_EXT_FILE) {
    logger.error(BadRequest.message);
    res.status(BadRequest.code).json({ error: BadRequest.message });
    return;
  }
  logger.error(InternalServerError.message);
  res
    .status(InternalServerError.code)
    .json({ error: InternalServerError.message });
};
