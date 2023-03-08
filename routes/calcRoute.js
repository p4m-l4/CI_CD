import { Router } from 'express';

// ================================= locals ========================================
import add from '../calculator/add.js';
import subtract from '../calculator/subtract.js';
import multiply from '../calculator/multiply.js';
import divide from '../calculator/divide.js';
import Calc from '../models/calc.js';

const router = Router();

// Home Route
export default router.get('/', async (req, res) => {
  const results = await Calc.find().sort({ createdAt: -1 }).limit(5);
  res.render('index', { results });
});

// Home Post
// Single Responsibility Principle, running calculations, store to DB
router.post('/', async (req, res, next) => {
  try {
    // get old results
    const results = await Calc.find().sort({ createdAt: -1 }).limit(5);

    //  Instantiate Variables
    let result;
    const { num1 } = req.body;
    const { num2 } = req.body;
    const oper = req.body.operator;
    const operator = oper.trim();
    const operands = ['+', '-', '/', '*'];

    // Run calculation

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
    // console.log('here');
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
