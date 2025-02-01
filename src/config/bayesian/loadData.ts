import natural from 'natural';
import { fileURLToPath } from 'url';
import path from 'path';
import logger from '../logs/winston';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let classifier: natural.BayesClassifier | null | undefined = null;
export const loadClassifier = () => {
  natural.BayesClassifier.load(
    path.join(__dirname, '../../bayesian/classifier.json'),
    null,
    (err, loadedFile) => {
      if (err) {
        logger.error('Error al cargar el clasificador:', err);
        process.exit(1);
      }
      classifier = loadedFile;
    }
  );
};

export const getClassifier = (): natural.BayesClassifier | void => {
  if (!classifier) {
    logger.error('EL clasificador aun no se ha cargado');
    return;
  }
  return classifier;
};
