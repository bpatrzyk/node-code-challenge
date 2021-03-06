import { Router } from 'express';
import { asyncErrorHandler } from '../utils/errors/asyncErrorHandler';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/tasksController';
import { userValidator } from '../middlewares/userValidator';

export const tasksRouter: Router = Router();

tasksRouter.use(userValidator);

tasksRouter.get('/', asyncErrorHandler(getTasks));
tasksRouter.post('/', asyncErrorHandler(createTask));
tasksRouter.patch('/:taskId', asyncErrorHandler(updateTask));
tasksRouter.delete('/:taskId', asyncErrorHandler(deleteTask));
