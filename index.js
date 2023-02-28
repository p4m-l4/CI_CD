// Required modules
import express from 'express';
import path from 'path';
import config  from '../config/db';
import passport  from 'passport';
import mongoose  from 'mongoose';


// importing user model
import Storing from "./model/Store";

// locals
import add from './calculator/add.js';
import subtract from './calculator/subtract.js';
import multiply from './calculator/multiply.js';
import divide from './calculator/divide.js';

// Instantiation
const app = express();

// Setting up db connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});

app.set('view engine', 'pug');
app.set('views', path.join(process.cwd(), 'views'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

 // Passport configuration middleware
 app.use(passport.initialize());
 passport.use(Storing.createStrategy());
 

// Home Route
app.get('/', (req, res) => {
  res.render('calculator');
});

// Home Post
app.post('/', async (req, res) => {
  try {
    const data = new Storing(req.body);

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
    result = `${num1} - ${num2} = ${ans}`;
  } else if (operator === '*') {
    let ans = multiply(num1, num2);
    result = `${num1} x ${num2} = ${ans}`;
  } else if (operator === '/') {
    let ans = divide(num1, num2);
    result = `${num1} : ${num2} = ${ans}`;
  }
  await data.save();
  res.render('calculator', { result });
  } catch (error) {
    res.status(400).redirect('calculator');
    console.log(error);
  };
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
