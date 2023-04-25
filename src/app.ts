import express from 'express';
import productRouter from './routes/product';
import userRouter from './routes/user';
import orderRouter from './routes/order';
import loginRouter from './routes/login';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
