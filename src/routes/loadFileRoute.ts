import { Router } from 'express';
import { loadFileController } from '../controllers';
import multerMiddleware from '../middlewares/multer';
import { uploadFileMiddleware } from '../middlewares/uploadFileMiddleware';

const loadFileRoute = Router();

loadFileRoute.post(
  '/',
  multerMiddleware,
  uploadFileMiddleware,
  loadFileController
);

export default loadFileRoute;
