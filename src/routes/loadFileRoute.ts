import { Router } from 'express';
import { loadFileController } from '../controllers';
import multerMiddleware from '../config/middlewares/multer';

const loadFileRoute = Router();

loadFileRoute.post('/', multerMiddleware, loadFileController);

export default loadFileRoute;
