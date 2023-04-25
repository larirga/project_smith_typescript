import Order from '../interfaces/order.interface';
import orderModel from '../models/order.model';

const getAll = async (): Promise<Order[]> => {
  const allOrders = await orderModel.getAll();
  return allOrders;
};

const orderService = {
  getAll,
};

export default orderService;