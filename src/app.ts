import express from 'express';
import productRouter from './routes/product';
import userRouter from './routes/user';
import orderRouter from './routes/order';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
