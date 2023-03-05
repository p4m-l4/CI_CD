// ========================== Required modules ================================
import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

// ================================= locals ========================================

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
  .then(() => console.log(`Connected to ${process.env.DB_URI}! 👌`));

// app settings
app.set('view engine', 'pug');
app.set('views', path.join(process.cwd(), 'views'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

// =========================== routes =======================================

app.use('/', calcRoute);

// listening port

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚩 listening on port 🙌 ${PORT} 🙌 🚩`);
});
