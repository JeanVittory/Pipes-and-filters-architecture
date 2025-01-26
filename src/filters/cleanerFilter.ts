import logger from '../config/logs/winston';
import {
  REGEX_ONLY_NUMBERS_AND_LETTERS,
  REGEX_REMOVE_NEW_LINES,
  REGEX_REMOVE_WHITESPACE,
  REGEX_REMOVE_WHITESPACE_AT_NEWLINE,
} from '../constants';

export const cleanerFilter = (stream: string) => {
  logger.info('Executing cleanerFilter function...');

  const streamWithNoSpecialCharacters = removeSpecialCharacters(stream);

  const streamWithNoWhitespaces = removeWhitespaces(
    streamWithNoSpecialCharacters
  );

  const streamWithNoNewlines = removeNewlines(streamWithNoWhitespaces);

  logger.info('Finishing cleanerFilter function...');
  return streamWithNoNewlines;
};

const removeSpecialCharacters = (stream: string): string => {
  logger.info('Executing removeSpecialCharacters function...');

  return stream.replace(REGEX_ONLY_NUMBERS_AND_LETTERS, '');
};

const removeWhitespaces = (stream: string): string => {
  logger.info('Executing removeWhitespaces function...');

  const streamWithNoWhiteSpaces = stream
    .replace(REGEX_REMOVE_WHITESPACE, ' ')
    .trim();
  return streamWithNoWhiteSpaces.replace(
    REGEX_REMOVE_WHITESPACE_AT_NEWLINE,
    ''
  );
};

const removeNewlines = (stream: string): string => {
  logger.info('Executing removeNewlines function...');

  return stream.trim().replace(REGEX_REMOVE_NEW_LINES, '\n');
};
