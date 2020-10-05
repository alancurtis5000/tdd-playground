const express = require('express');
const bodyParser = require('body-parser');
const random = require('lodash/random');

const app = express();

// Top Level middleware
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

const quotes = [
  'good times are here',
  'cheese is the food of mice',
  'dancing is the best',
  'retreat if you are a coward',
];

// Endpoints
app.get('/api/test', (req, res) => {
  console.log('hit server');
  const result = quotes[random(0, 3)];
  setTimeout(() => {
    res.status(200).send(result);
  }, 000);
});

// Launch Server
app.listen(4321, () => console.log(`server running on port: ${4321}`));
