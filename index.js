const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP, error => {
  if (error) {
    console.log('error');
  } else {
    console.log('started' + process.env.PORT);
  }
});
