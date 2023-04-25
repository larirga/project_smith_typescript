import { Request, Response } from 'express';
import userService from '../services/user.service';
import generateToken from '../utils/auth';
import statusCode from '../statusCode';

const create = async (req: Request, res: Response) => {
  const newUser = await userService.create(req.body);
  const token = generateToken(newUser);
  return res.status(statusCode.CREATED).json({ token });
};

const userController = {
  create,
};

export default userController;