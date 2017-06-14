import express from 'express';
import ebook from './ebook';

const router = express.Router();

router.use('/ebook', ebook);
export default router;
