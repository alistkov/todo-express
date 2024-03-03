import express, { Request, Response, Router } from 'express';
import { Todo } from './todo-model';

const router: Router = express.Router();

router.get('/todos', async (req: Request, res: Response) => {
  const todos = await Todo.find().exec();
  res.json(todos);
});

router.post('/todos', async (req: Request, res: Response) => {
  const todo = new Todo({
    ...req.body,
  });
  await todo.save();
  res.status(201).json(todo);
});

router.get('/todos/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const todo = await Todo.findById({ _id: id });
  res.json(todo);
});

router.patch('/todos/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = {
    ...req.body,
    updatedAt: Date.now(),
  };
  const todo = await Todo.findOneAndUpdate({ _id: id }, { $set: data }, { new: true }).exec();
  res.json(todo);
});

router.delete('/todos/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  await Todo.findOneAndDelete({ _id: id });
  res.json({
    message: 'Todo was removed',
  });
});

export { router };
