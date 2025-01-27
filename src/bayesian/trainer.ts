import path from 'path';
import { fileURLToPath } from 'url';
import natural, { BayesClassifier } from 'natural';
import logger from '../config/logs/winston';
import { trainingData } from './trainingData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const classifier = new natural.BayesClassifier();

export const trainClassifier = (): void => {
  logger.verbose('Executing trainClassifier function...');

  trainingData.forEach((element) => {
    classifier.addDocument(element.text, element.classification);
  });

  classifier.train();
  logger.verbose('Classifier successfully trained');

  saveDataClassificationTrained(classifier);

  logger.verbose('trainClassifier function finished');
};

const saveDataClassificationTrained = (classifier: BayesClassifier): void => {
  logger.verbose('Executing saveDataClassificationTrained function...');

  classifier.save(`${__dirname}/classifier.json`, function (err) {
    if (err) {
      logger.error('Error saving the classifier file:', err);
    } else {
      logger.verbose(
        `Classifier trained and saved in ${__dirname}/classifier.json`
      );
    }
  });

  logger.verbose('saveDataClassificationTrained function finished');
};

trainClassifier();
