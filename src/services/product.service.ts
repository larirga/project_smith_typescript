import Product from '../interfaces/product.interface';
import productModel from '../models/product.model';

const create = async (product: Product): Promise<Product> => {
  const newProduct = await productModel.create(product);
  return newProduct;
};

const getAll = async (): Promise<Product[]> => {
  const allProducts = await productModel.getAll();
  return allProducts;
};

const productService = {
  create,
  getAll,
};

export default productService;