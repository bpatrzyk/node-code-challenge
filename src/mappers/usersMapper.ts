import { IUser } from '../models/User';
import { NewUserDTO, UserDTO } from '../dtos/userDTOs';

export function toUserDTOs(users: IUser[]) {
  return users.map(user => toUserDTO(user));
}

export function toUserDTO(user: IUser) {
  return {
    name: user.name,
    email: user.email
  } as UserDTO;
}

export function toUser(newUser: NewUserDTO) {
  return {
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
  } as IUser;
}
