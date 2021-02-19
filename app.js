const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Nice! Bite me!!!');
});

app.get('/demo', (req, res) => {
  res.set('X-full-stack', '4life');
  res.status(418);
  res.send('I preferrrrrrrrr tea');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
