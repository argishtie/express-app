import 'dotenv/config';
import express from 'express';
import HttpErrors from "http-errors";
import { createServer } from 'http';

import routes from './routes/index.js';

const app = express();

const { PORT } = process.env;

app.use((req, res, next) => {
  console.log(req.method, req.ip, req.url, new Date().toString());
  next()
});

app.use(routes);

app.use((req, res, next) => {
  next(new HttpErrors(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
});

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

