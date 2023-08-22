const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("나는 api 폴더 안에 있는 banner입니다.")
})

module.exports = router; 