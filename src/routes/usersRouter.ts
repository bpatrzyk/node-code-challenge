import { Router } from 'express';
import { asyncErrorHandler } from '../utils/errors/asyncErrorHandler';
import { getUsers, createUser, login } from '../controllers/usersController';

export const usersRouter: Router = Router();

usersRouter.get('/', asyncErrorHandler(getUsers));
usersRouter.post('/', asyncErrorHandler(createUser));
usersRouter.post('/login', asyncErrorHandler(login));
