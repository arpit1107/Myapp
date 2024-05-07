const express = require('express');
const app = express();

const PORT = 3000;

app.get('/',(req,res) => {
  res.send("hello world");
  res.end();
});

app.listen(PORT,() => {
  console.log(`Server is running on the ${PORT}`);
});
