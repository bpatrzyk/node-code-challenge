import express from 'express';
import { tasksRouter } from './tasksRouter';

export const apiV1 = express();

apiV1.use(express.json());

apiV1.use('/tasks', tasksRouter);
