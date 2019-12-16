import { config as dotenv } from 'dotenv';

dotenv();

import express from 'express';
import { apiV1 } from './routes/apiV1';
import { errorHandler } from './middlewares/errorHandler';

const port = process.env.PORT;

const app = express();

app.use('/api/v1', apiV1);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
