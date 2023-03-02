// Required modules
// eslint-disable-next-line import/no-extraneous-dependencies
import * as dotenv from 'dotenv';
import express from 'express';
import path from 'path';

// locals
import add from './calculator/add.js';
import subtract from './calculator/subtract.js';
import multiply from './calculator/multiply.js';
import divide from './calculator/divide.js';

dotenv.config();

// Instantiation
const app = express();

// Constants
const { PORT } = process.env;

app.set('view engine', 'pug');
app.set('views', path.join(process.cwd(), 'views'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

// Home Route
app.get('/', (req, res) => {
  res.render('index');
});

// Home Post
app.post('/', (req, res) => {
  let result;
  const { num1 } = req.body;
  const { num2 } = (req.body);
  const oper = req.body.operator;
  const operator = oper.trim();
  const operands = ['+', '-', '/', '*'];

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

  res.render('index', { result });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
