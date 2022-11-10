const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("asdfasdfasdf post");
})

router.get("/all", (req,res) => {
    res.send("전체 포스트 가져오기")
})

module.exports = router;