const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
  res.send({ success: true });
});

app.get('/', (req, res) => {
  res.send({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
