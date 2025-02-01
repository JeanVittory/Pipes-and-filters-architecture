import { CATEGORIES } from './models/categories';

export const PORT = 4000;
export const PREFIX_API = '/api';

export const EADDRINUSE = 'EADDRINUSE';
export const EACCES = 'EACCES';

export const DECODE_FORMAT = 'utf-8';

export const FILE_EXTENSION = '.txt';
export const MULTER_MESSAGE_ERROR_EXT_FILE = 'Only .txt files are allowed!';
export const MAX_FILE_SIZE_IN_KB = 3 * 1024; // max capability: 3kb
export const MAX_FILE_SIZE_IN_BYTES = 3072; // max capability: 3kb

export const RELATIVE_ROUTE_TO_LOG_INFO_FILE = '../../logs/info.log';
export const RELATIVE_ROUTE_TO_LOG_ERROR_FILE = '../../logs/errors.log';
export const RELATIVE_ROUTE_TO_LOG_VERBOSE_FILE = '../../logs/verbose.log';

export const REGEX_ONLY_NUMBERS_AND_LETTERS = /[^a-zA-Z0-9áéíóúÁÉÍÓÚ\s\n]/g;
export const REGEX_REMOVE_WHITESPACE = /[ ]{2,}/g;
export const REGEX_REMOVE_WHITESPACE_AT_NEWLINE = /^[ ]+|[ ]+$/gm;
export const REGEX_REMOVE_NEW_LINES = /\n{2,}/g;
export const ONLY_CONTAINS_SYMBOLS = /^[^a-zA-Z0-9\s\n]+$/gm;
export const ONLY_CONTAINS_NUMBERS_AND_SPECIAL_CHARACTERS =
  /^[\d\s.,!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?\n]*$/;

export const KEYWORDS_BY_CATEGORY = new Map<CATEGORIES, string[]>([
  [CATEGORIES.URGENT, ['urgente', 'importante', 'prioridad']],
  [CATEGORIES.INFORMATION, ['información', 'detalles', 'documentación']],
  [CATEGORIES.ADVERTISING, ['oferta', 'descuento', 'promoción']],
  [CATEGORIES.UNKNOWN, []],
]);

export const HIGHLIGHT_URGENT = 'URGENTE';
