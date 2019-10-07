const path = require('path');

const express = require('express');
const morgan = require('morgan');

const PORT = 3000;
const app = express();
const rootDir = path.resolve(__dirname, 'static');

app.use(morgan('short'));
app.use('/static', express.static(rootDir));

app.get('/api/friends', (req, res) => {
  const data = [
    { name: 'Tyler', age: 28 },
    { name: 'Matt', age: 27 },
    { name: 'Ryan', age: 35 },
  ];
  res.json({ data });
});

app.get('*', (req, res) => {
  res.status(200).sendFile(path.resolve(rootDir, 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
