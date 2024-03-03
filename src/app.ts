import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { router as todosRouter } from './todos/todos';

const bootstrap = (): void => {
  const app = express();
  const port = 8080;

  app.use(bodyParser.json());

  mongoose
    .connect('mongodb://127.0.0.1:27017/todo-app')
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Failed to connect to MongoDB', error);
    });

  app.use('/api', todosRouter);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

export default bootstrap;
