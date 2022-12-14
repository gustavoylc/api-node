const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Testing Node API');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Running Server on port ${port}`);
});
