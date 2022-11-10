const express = require("express");
const app = express();
const port = 4001;

app.get("/", (req, res) => {
  res.send("asdfasdfasdf");
});

app.listen(port, () => {
  console.log(`계정 포트:${port}`);
});
