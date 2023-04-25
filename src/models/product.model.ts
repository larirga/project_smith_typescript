import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Product from '../interfaces/product.interface';
import connection from './connection';

const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, ...product };
};

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return rows as Product[];
};

const productModel = {
  create,
  getAll,
};

export default productModel;