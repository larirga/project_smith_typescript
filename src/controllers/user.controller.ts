import { Request, Response } from 'express';
import userService from '../services/user.service';
import generateToken from '../utils/auth';
import statusCode from '../statusCode';

const create = async (req: Request, res: Response) => {
  const newUser = await userService.create(req.body);
  const token = generateToken(newUser);
  return res.status(statusCode.CREATED).json({ token });
};

const login = async (req: Request, res: Response) => {
  const { username } = req.body;
  const newUser = await userService.login(username);
  if (!newUser.id || newUser.password !== req.body.password) {
    return res.status(statusCode.UNAUTHORIZED).json({ message: 'Username or password invalid' });
  }
  const token = generateToken(newUser);
  return res.status(statusCode.OK).json({ token });
};

const userController = {
  create,
  login,
};

export default userController;