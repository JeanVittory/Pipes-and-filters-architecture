import { getClassifier } from '../config/bayesian/loadData';
import logger from '../config/logs/winston';
import { IFilterResult } from '../models/filters';

export const classifierFilter = (stream: IFilterResult) => {
  logger.verbose('Executing classifierFilter function...');

  const classifier = getClassifier();
  if (classifier) {
    try {
      const category = classifier.classify(stream.result.toString());
      logger.verbose('Finishing classifierFilter function...');
      return {
        result: stream.result,
        category,
        filtersApplied: [...stream.filtersApplied, 'classifier filter'],
      };
    } catch (error) {
      logger.error('Error using the classfier:', error);
    }
  }
};
