import { ResultSetHeader } from 'mysql2';
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

const productModel = {
  create,
};

export default productModel;