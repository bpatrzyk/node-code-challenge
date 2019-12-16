import Users, { IUser } from '../models/User';

export async function getUsers() {
  return Users.find();
}

export async function createUser(newUser: IUser) {
  return Users.create(newUser);
}
