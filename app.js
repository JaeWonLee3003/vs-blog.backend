const express = require("express");
const indexRouter = require("./router/index");
const cors = require("cors");
const app = express();
const port = 4001;

app.use(cors());

app.use("/", indexRouter);

// app.get("/", (req, res) => {
//   res.send("asdfasdfasdf");
// });

app.listen(port, () => {
  console.log(`계정 포트:${port}`);
});
