import logger from '../config/logs/winston';
import { IMulterFile } from '../models/uploadFile';

export const extractFileDetails = (file: IMulterFile | undefined) => {
  logger.verbose(`Executing function extractFileDetails...`);
  return file
    ? `File Details:
  - Fieldname: ${file.fieldname || null}
  - Originalname: ${file.originalname || null}}
  - Encoding: ${file.encoding || null}}
  - Mimetype: ${file.mimetype || null}}
  - Size: ${file.size || null} bytes
  - Buffer: ${file.buffer.byteLength ? file.buffer.byteLength : 'empty'}`
    : 'No file uploaded';
};
