import User from '../interfaces/user.interface';
import userModel from '../models/user.model';

const create = async (user: User): Promise<User> => {
  const newUser = await userModel.create(user);
  return newUser;
};

const login = async (username: string) => {
  const newUser = await userModel.login(username);
  return newUser;
};

const userService = {
  create,
  login,
};

export default userService;