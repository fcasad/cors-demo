const express = require('express');
const morgan = require('morgan');

const PORT = 3001;
const app = express();

app.use(morgan('short'));

app.get('/friends', (req, res) => {
  const { callback } = req.query;
  const data = [
    { name: 'Tyler', age: 28 },
    { name: 'Matt', age: 27 },
    { name: 'Ryan', age: 35 },
  ];
  res.send(`${callback}(${JSON.stringify(data)})`);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
