import { NextFunction, Request, RequestHandler, Response } from 'express';

export function asyncErrorHandler(requestHandler: RequestHandler) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch(next);
  };
}
