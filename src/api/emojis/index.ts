import { middlewares } from '@/middlewares';
import express from 'express';

const router = express.Router();

type EmojiResponse = string[];

router.use(middlewares.auth);

router.get<{}, EmojiResponse>('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

export default router;
