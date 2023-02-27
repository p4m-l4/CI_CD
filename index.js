// Required modules
import express from 'express';
import path from 'path';

// locals
import add from './calculator/add.js';
import subtract from './calculator/subtract.js';
import multiply from './calculator/multiply.js';
import divide from './calculator/divide.js';

// Instantiation
const app = express();

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
  let operands = ['+', '-', '/', '*'];

  if (!operands.includes(operator)) {
    result = `Wrong Operator " ${operator} "`;
  } else if (operator === '+') {
    let ans = add(num1, num2);
    result = `${num1} + ${num2} = ${ans}`;
  } else if (operator === '-') {
    let ans = subtract(num1, num2);
    result = `${num1} + ${num2} = ${ans}`;
  } else if (operator === '*') {
    let ans = multiply(num1, num2);
    result = `${num1} + ${num2} = ${ans}`;
  } else if (operator === '/') {
    let ans = divide(num1, num2);
    result = `${num1} + ${num2} = ${ans}`;
  }

  res.render('index', { result });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
