import express from 'express';
import productRouter from './routes/product';
import userRouter from './routes/user';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;
