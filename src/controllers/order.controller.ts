import { Request, Response } from 'express';
import orderService from '../services/order.service';
import statusCode from '../statusCode';

const getAll = async (req: Request, res: Response) => {
  const allOrders = await orderService.getAll();
  return res.status(statusCode.OK).json(allOrders);
};

const orderController = {
  getAll,
};

export default orderController;