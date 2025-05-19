import express from 'express';
import cors from 'cors';
import generate from './generate.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/generate', async (req, res) => {
  const queryDescription = req.body.queryDescription;
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ sqlQuery }); // <-- FIXED HERE
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating SQL query');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;