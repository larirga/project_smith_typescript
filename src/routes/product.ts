import express from 'express';
import productController from '../controllers/product.controller';

const productRouter = express.Router();

productRouter.post('/', productController.create);
productRouter.get('/', productController.getAll);

export default productRouter;