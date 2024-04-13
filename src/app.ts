require('dotenv').config();

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import api from './api';
import { database } from './database';
import MessageResponse from './interfaces/MessageResponse';
import { middlewares } from './middlewares';

database.connect();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(middlewares.waitForDatabase);

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🤘',
  });
});

app.use('/api', api);

app.use(middlewares.notFound);

export default app;
