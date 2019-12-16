import express from 'express';
import { tasksRouter } from './tasksRouter';
import { usersRouter } from './usersRouter';

export const apiV1 = express();

apiV1.use(express.json());

apiV1.use('/tasks', tasksRouter);
apiV1.use('/users', usersRouter);
