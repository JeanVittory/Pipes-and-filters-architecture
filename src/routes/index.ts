import { Router } from 'express';
import loadFileRoute from './loadFileRoute';

const router = Router();

router.use('/load-file', loadFileRoute);

export default router;
