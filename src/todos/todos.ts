import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/todos', (req: Request, res: Response) => {
  res.json({
    message: 'get messages',
  });
});

router.post('/todos', (req: Request, res: Response) => {
  res.json({
    message: 'post messages',
  });
});

router.get('/todos/:id', (req: Request, res: Response) => {
  res.json({
    message: 'id messages',
  });
});

router.patch('/todos/:id', (req: Request, res: Response) => {
  res.json({
    message: 'patch messages',
  });
});

router.delete('/todos/:id', (req: Request, res: Response) => {
  res.json({
    message: 'delete messages',
  });
});

export { router };
