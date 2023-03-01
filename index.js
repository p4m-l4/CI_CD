// ========================== Required modules ================================
import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

// ================================= locals ========================================
import add from './calculator/add.js';
import subtract from './calculator/subtract.js';
import multiply from './calculator/multiply.js';
import divide from './calculator/divide.js';
import Calc from './models/calc.js';

// =============================== Load Environment Variables ========================
dotenv.config();

// Instantiation
const app = express();

// Constants
const { PORT } = process.env || 3000;

// =========================== DB connection ============================================
await mongoose.connect(process.env.DB_URI)
  .then(() => console.log(`Connected to ${process.env.DB_URI}!`));

// app settings
app.set('view engine', 'pug');
app.set('views', path.join(process.cwd(), 'views'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

// Home Route
app.get('/', async (req, res) => {
  const results = await Calc.find().sort({ createdAt: -1 }).limit(5);
  res.render('index', { results });
});

// Home Post
app.post('/', async (req, res, next) => {
  try {
    // get old results
    const results = await Calc.find().sort({ createdAt: -1 }).limit(5);

    //  Instantiate Variables
    let result;
    const { num1 } = req.body;
    const { num2 } = (req.body);
    const oper = req.body.operator;
    const operator = oper.trim();
    const operands = ['+', '-', '/', '*'];

    // Run Computations

    if (!operands.includes(operator)) {
      result = `Wrong Operator " ${operator} "`;
    } else if (operator === '+') {
      const ans = add(num1, num2);
      result = `${num1} + ${num2} = ${ans}`;
    } else if (operator === '-') {
      const ans = subtract(num1, num2);
      result = `${num1} - ${num2} = ${ans}`;
    } else if (operator === '*') {
      const ans = multiply(num1, num2);
      result = `${num1} x ${num2} = ${ans}`;
    } else if (operator === '/') {
      const ans = divide(num1, num2);
      result = `${num1} : ${num2} = ${ans}`;
    }
    // console.log(result);
    // Save to DB

    if (result !== `Wrong Operator " ${operator} "`) {
      const calc = new Calc({ result });
      await calc.save();
      // return;
    }
    res.render('index', { result, results });
    next();
  } catch (err) {
    res.status(400).send('Num not saved!');
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
