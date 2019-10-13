const path = require('path');

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const PORT = 3000;
const app = express();
const rootDir = path.resolve(__dirname, 'static');

app.use(morgan('short'));
app.use('/static', express.static(rootDir));
app.use('/proxy', (req, res) => {
  const url = `http://localhost:3001${req.url}`;
  axios.get(url).then(({ data }) => res.json(data));
});

app.get('*', (req, res) => {
  res.status(200).sendFile(path.resolve(rootDir, 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
