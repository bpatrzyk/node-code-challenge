import { Request, Response } from 'express';
import * as Service from '../services/usersService';
import { NewUserDTO } from '../dtos/userDTOs';
import { toUserDTOs, toUser } from '../mappers/usersMapper';

export async function getUsers(req: Request, res: Response) {
  const users = await Service.getUsers();
  res.send(toUserDTOs(users));
}

export async function createUser(req: Request, res: Response) {
  const newUserDTO = req.body as NewUserDTO;
  const newUser = toUser(newUserDTO);
  await Service.createUser(newUser);
  res.send();
}
