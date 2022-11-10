const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("asdfasdfasdf post");
});

module.exports = router;

// 하위 디렉토리 조회용 재귀 함수
