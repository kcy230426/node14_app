const app = require("express")();
const navi = require("./api/navi");
const interview = require("./api/interview");
const banner = require("./api/banner");
const port = 8000;

// 리액트가 요청할 수 있도록 주소 생성하기ㅇ

app.use('/', interview);
app.use('/navi', navi);
app.use('/banner', banner);
// 꼭 이름과 변수명을 똑같이 만들 필요는 없음

app.listen(port,()=>{
    console.log("오늘의 포트 번호는 8000번")
})