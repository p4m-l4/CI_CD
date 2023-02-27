// Required modules
import express from 'express';

// Instantiation
const app = express();

// Home Route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
