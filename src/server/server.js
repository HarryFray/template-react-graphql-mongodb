const express = require('express');

const app = express();

app.all('*', (req, res) => {
  res.json({ ok: true })
})


app.listen(3000, () => {
  console.log('API local 3000');
})