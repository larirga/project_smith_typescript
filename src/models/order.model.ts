import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Order from '../interfaces/order.interface';

const getAll = async (): Promise<Order[]> => {
  const [rows] = await connection
    .execute<RowDataPacket[]>(`SELECT o.id, u.id as userId,
    JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.users as u ON o.user_id = u.id
    INNER JOIN Trybesmith.products as p ON p.order_id = o.id
    GROUP BY o.id`);
  return rows as Order[];
};

const orderModel = {
  getAll,
};

export default orderModel;