import Users, { IUser } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/errors/UnauthorizedError';

export async function getUsers() {
  return Users.find();
}

export async function createUser(newUser: IUser) {
  return Users.create(newUser);
}

export async function login(email: string, password: string) {
  const user = await Users.findOne({ email });
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new UnauthorizedError('Unknown user/password');
  }

  return jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
}
