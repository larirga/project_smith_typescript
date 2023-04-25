import express from 'express';
import userController from '../controllers/user.controller';
import validateLogin from '../middlewares/validateLogin';

const login = express.Router();

login.post('/', validateLogin.login, userController.login);

export default login;