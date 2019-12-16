import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/errors/UnauthorizedError';

export function userValidator(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['x-access-token'] as string;

  try {
    jwt.verify(token, process.env.JWT_SECRET);

  } catch (e) {
    throw new UnauthorizedError("Incorrect token");
  }

  next();
}
