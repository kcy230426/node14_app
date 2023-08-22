const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("나는 api 폴더 안에 있는 navi입니다.")
})

router.get('/sub',(req,res)=>{
    res.send("나는 하위 라우터에요. 주소창에서 요청해야해요 부모라우터/sub")
})

module.exports = router; 