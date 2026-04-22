import 'dotenv/config';
import express from 'express';

const app = express();

const { PORT } = process.env;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the app',
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
