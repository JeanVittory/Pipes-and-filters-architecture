import { createLogger, format, transports } from 'winston';
import { fileURLToPath } from 'url';
import path from 'path';
import {
  RELATIVE_ROUTE_TO_LOG_INFO_FILE,
  RELATIVE_ROUTE_TO_LOG_ERROR_FILE,
  RELATIVE_ROUTE_TO_LOG_VERBOSE_FILE,
} from '../../constants';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const onlyInfoLevel = format((info) => {
  if (info.level === 'info') return info;
  return false;
});
const onlyVerboseLevel = format((verbose) => {
  if (verbose.level === 'verbose') return verbose;
  return false;
});

const printFormat = format.printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
  level: 'verbose',
  transports: [
    new transports.File({
      filename: path.join(__dirname, RELATIVE_ROUTE_TO_LOG_INFO_FILE),
      level: 'info',
      format: format.combine(onlyInfoLevel(), format.timestamp(), printFormat),
    }),
    new transports.File({
      filename: path.join(__dirname, RELATIVE_ROUTE_TO_LOG_ERROR_FILE),
      level: 'warn',
      format: format.combine(format.timestamp(), printFormat),
    }),
    new transports.Console({
      level: 'verbose',
      format: format.combine(format.timestamp(), printFormat),
    }),
    new transports.File({
      filename: path.join(__dirname, RELATIVE_ROUTE_TO_LOG_VERBOSE_FILE),
      level: 'verbose',
      format: format.combine(
        onlyVerboseLevel(),
        format.timestamp(),
        printFormat
      ),
    }),
  ],
});

export default logger;
