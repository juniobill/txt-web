const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());

app.get('/file', async (req, res) => {
  const txt = req.query.data;
  await fs.writeFileSync('./data.txt', txt);
  res.send('txt storage');
});

app.get('/', async (req, res) => {
  const txt = await fs.readFileSync('./data.txt', 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    return data;
  });

  console.log(txt);
  return res.send(txt);
});
var port = process.env.PORT || 3333;
app.listen(port);
