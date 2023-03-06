// ========================== Required modules ================================
import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

// ================================= locals ========================================

import logger from './logger.js';
import httpLogger from './httpLogger.js';
import calcRoute from './routes/calcRoute.js';

// =============================== Load Environment Variables ========================

dotenv.config();

// Instantiation
const app = express();

// Constants
const { PORT } = process.env || 3000;

// =========================== DB connection ============================================

await mongoose
  .connect(process.env.DB_URI)
  // eslint-disable-next-line no-console
  .then(() => console.log('Connected to DB! 👌'));

// loggers
function logErrors(err, req, res, next) {
  // console.error(err.stack);
  next(err);
}
function errorHandler(err, req, res) {
  res.status(500).send('Error!');
}

// app settings
app.set('view engine', 'pug');
app.set('views', path.join(process.cwd(), 'views'));

// middleware
app.use(httpLogger);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

// =========================== routes =======================================

app.use('/', calcRoute);

// listening port

app.use(logErrors);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  // console.log(`🚩 listening on port 🙌 ${PORT} 🙌 🚩`);
  logger.info(`Calc server listening on port ${PORT}`);
});
