import { getClassifier } from '../config/bayesian/loadData';
import logger from '../config/logs/winston';
import { IFilterResult } from '../models/filters';

export const classifierFilter = (
  stream: IFilterResult
): IFilterResult | undefined => {
  logger.verbose('Executing classifierFilter function...');

  const classifier = getClassifier();
  if (classifier) {
    try {
      const category = classifier.classify(stream.text.toString());

      logger.verbose('Finishing classifierFilter function...');

      return {
        text: stream.text,
        category,
        filtersApplied: [...stream.filtersApplied, 'classifier filter'],
      };
    } catch (error) {
      logger.error('Error using the classfier:', error);
    }
  }
};
