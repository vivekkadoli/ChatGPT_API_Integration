import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;