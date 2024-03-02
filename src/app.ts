import express, { Express } from 'express';
import { Server } from 'node:http';

export class App {
  app: Express;
  port: number;
  server: Server;

  constructor() {
    this.app = express();
    this.port = 8080;
  }

  public async init(): Promise<void> {
    this.app.get('/', (req, res) => {
      res.send('Running...');
    });
    this.server = this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}
