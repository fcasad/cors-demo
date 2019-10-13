const express = require('express');
const morgan = require('morgan');

const PORT = 3001;
const app = express();

app.use(morgan('short'));
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/friends', (req, res) => {
  const data = [
    { name: 'Tyler', age: 28 },
    { name: 'Matt', age: 27 },
    { name: 'Ryan', age: 35 },
  ];
  res.json({ data });
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
