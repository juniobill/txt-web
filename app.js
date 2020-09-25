const express = require('express');
const fs = require('fs');

const app = express();

app.get('/file', async (req, res) => {
  const txt = await fs.writeFileSync('./data.txt', req.query.data);
  res.send(txt);
});

app.get('/', async (req, res) => {
  const txt = await fs.readFileSync('./data.txt', 'utf8', (err, data) => data);
  return res.send(txt);
});

app.listen(process.env.PORT || 3333);
