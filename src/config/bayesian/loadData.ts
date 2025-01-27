import natural from 'natural';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let classifier: natural.BayesClassifier | null | undefined = null;
export const loadClassifier = () => {
  natural.BayesClassifier.load(
    path.join(__dirname, '../../bayesian/classifier.json'),
    null,
    (err, loadedFile) => {
      if (err) {
        console.error('Error al cargar el clasificador:', err);
        process.exit(1);
      }
      classifier = loadedFile;
    }
  );
};

export const getClassifier = (): natural.BayesClassifier | void => {
  if (!classifier) return console.log('EL clasificador aun no se ha cargado');
  return classifier;
};
