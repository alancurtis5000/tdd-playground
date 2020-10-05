const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Top Level middleware
app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());

// Endpoints
app.get('/api/test', (req, res) => {
  console.log('hit server');
  res.status(200).send('hello');
});

// Launch Server
app.listen(4321, () => console.log(`server running on port: ${4321}`));
