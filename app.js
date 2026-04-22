import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';

import routes from './routes/index.js';

const app = express();

const { PORT } = process.env;

app.use(routes);

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

