import logger from '../config/logs/winston';
import {
  REGEX_ONLY_NUMBERS_AND_LETTERS,
  REGEX_REMOVE_NEW_LINES,
  REGEX_REMOVE_WHITESPACE,
  REGEX_REMOVE_WHITESPACE_AT_NEWLINE,
} from '../constants';
import { IFilterResult } from '../models/filters';

export const cleanerFilter = (stream: string): IFilterResult => {
  logger.verbose('Executing cleanerFilter function...');

  const streamWithNoSpecialCharacters = removeSpecialCharacters(stream);

  const streamWithNoWhitespaces = removeWhitespaces(
    streamWithNoSpecialCharacters
  );

  const streamWithNoNewlines = removeNewlines(streamWithNoWhitespaces);
  logger.verbose('Finishing cleanerFilter function...');
  return {
    text: streamWithNoNewlines,
    filtersApplied: ['cleaner filter'],
  };
};

const removeSpecialCharacters = (stream: string): string => {
  logger.verbose('Executing removeSpecialCharacters function...');

  return stream.replace(REGEX_ONLY_NUMBERS_AND_LETTERS, '');
};

const removeWhitespaces = (stream: string): string => {
  logger.verbose('Executing removeWhitespaces function...');

  const streamWithNoWhiteSpaces = stream
    .replace(REGEX_REMOVE_WHITESPACE, ' ')
    .trim();
  return streamWithNoWhiteSpaces.replace(
    REGEX_REMOVE_WHITESPACE_AT_NEWLINE,
    ''
  );
};

const removeNewlines = (stream: string): string => {
  logger.verbose('Executing removeNewlines function...');

  return stream.trim().replace(REGEX_REMOVE_NEW_LINES, '\n');
};
