import express from 'express';
import { postEbook } from './post_ebook';

const router = express.Router();

router.post('/ebook', postEbook);

export default router;
