import express from 'express';
import { router as todosRouter } from './todos/todos';

const bootstrap = (): void => {
  const app = express();
  const port = 8080;

  app.get('/', (req, res) => {
    res.json({
      message: 'Ok',
    });
  });

  app.use(todosRouter);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

export default bootstrap;
