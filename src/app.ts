import express from 'express';

const bootstrap = (): void => {
  const app = express();
  const port = 8080;

  app.get('/', (req, res) => {
    res.json({
      message: 'Ok',
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

export default bootstrap;
