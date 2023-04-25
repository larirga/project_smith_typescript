import { Request, Response, NextFunction } from 'express';
import User from '../interfaces/user.interface';
import statusCode from '../statusCode';

const login = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as User;
  if (!username) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"username" is required' });
  }

  if (!password) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"password" is required' });
  }
  return next();
};

const validateLogin = {
  login,
};

export default validateLogin;