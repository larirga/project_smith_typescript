import { Request, Response } from 'express';
import productService from '../services/product.service';
import statusCode from '../statusCode';

const create = async (req: Request, res: Response) => {
  const newProduct = await productService.create(req.body);
  return res.status(statusCode.CREATED).json(newProduct);
};

const getAll = async (req: Request, res: Response) => {
  const allProducts = await productService.getAll();
  return res.status(statusCode.OK).json(allProducts);
};

const productController = {
  create,
  getAll,
};

export default productController;