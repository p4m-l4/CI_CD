// Required modules
import express from 'express';

// locals
import add from './calculator/add.js';
import subtract from './calculator/subtract.js';

// Instantiation
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// Example data
const vals = {
  num1: 1,
  num2: 2,
  opperand: '+',
};

let ans;

if (vals.opperand === '+') {
  ans = add(vals.num1, vals.num2);
  console.log(ans);
  // return ans;
}
// Home Route
app.get('/', (req, res) => {
  res.json({ ans });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
