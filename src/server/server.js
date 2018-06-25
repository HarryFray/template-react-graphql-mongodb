const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.json({ okok: false });
});


app.listen(3000, () => {
  console.log('API local 3000');
});
