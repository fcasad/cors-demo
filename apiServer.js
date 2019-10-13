const express = require('express');
const morgan = require('morgan');

const PORT = 3001;
const app = express();

app.use(morgan('short'));

app.get('/friends', (req, res) => {
  const data = [
    { name: 'Tyler', age: 28 },
    { name: 'Matt', age: 27 },
    { name: 'Ryan', age: 35 },
  ];
  const content = `
    <html>
      <body>
        <script>
          window.addEventListener('message', event => {
            if (event.origin === 'http://localhost:3000') {
              event.source.postMessage({
                data: ${JSON.stringify(data)}
              }, event.origin);
            }
          })
        </script>
      </body>
    </html>
  `;
  res.send(content);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
