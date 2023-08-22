const app = require("express")();
const path = require("path")
const port = 8000

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/home/index.html")
})

app.get('/sub',(req,res)=>{
    res.sendFile(__dirname+"/subhome/index.html")
})

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname, "/nowhere/index.html"))
})

app.listen(port,()=>{
    console.log("오늘의 포트 번호는 8000번")
})