import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { middlewares } from 'middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🤘',
  });
});

app.use('/api', api);

app.use(middlewares.notFound);

export default app;
