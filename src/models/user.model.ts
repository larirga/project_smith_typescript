import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import User from '../interfaces/user.interface';

const create = async (user: User): Promise<User> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
};

const login = async (username: string): Promise<User> => {
  const [rows] = await connection
    .execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  const [user] = rows as User[];

  return { ...user };
};

const userModel = {
  create,
  login,
};

export default userModel;