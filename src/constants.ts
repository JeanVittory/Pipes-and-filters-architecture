export const PORT = 4000;
export const PREFIX_API = '/api';

export const EADDRINUSE = 'EADDRINUSE';
export const EACCES = 'EACCES';

export const FILE_EXTENSION = '.txt';
export const MULTER_MESSAGE_ERROR_EXT_FILE = 'Only .txt files are allowed!';
export const MAX_FILE_SIZE_IN_KB = 3 * 1024; // max capability: 3kb
export const MAX_FILE_SIZE_IN_BYTES = 3072; // max capability: 3kb

export const RELATIVE_ROUTE_TO_LOG_INFO_FILE = '../../logs/info.log';
export const RELATIVE_ROUTE_TO_LOG_ERROR_FILE = '../../logs/errors.log';

export const REGEX_ONLY_NUMBERS_AND_LETTERS = /[^a-zA-Z0-9áéíóúÁÉÍÓÚ\s\n]/g;
export const REGEX_REMOVE_WHITESPACE = /[ ]{2,}/g;
export const REGEX_REMOVE_WHITESPACE_AT_NEWLINE = /^[ ]+/gm;
export const REGEX_REMOVE_NEW_LINES = /\n{2,}/g;
