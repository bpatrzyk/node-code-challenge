import { Request, Response } from 'express';
import * as Service from '../services/usersService';
import { LoginDTO, NewUserDTO } from '../dtos/userDTOs';
import { toUserDTOs, toUser, toTokenDTO } from '../mappers/usersMapper';

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

export async function login(req: Request, res: Response) {
  const loginDTO = req.body as LoginDTO;
  const token = await Service.login(loginDTO.email, loginDTO.password);
  res.send(toTokenDTO(token));
}
