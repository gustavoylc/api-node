const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Testing Node API');
});

app.listen(port, () => {
  console.log(`Running Server on port ${port}`);
});