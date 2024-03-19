require('dotenv').config()
const express = require('express')
//const express = require('express) common js style
// import express from 'express' //module js 

const app = express()
//const app= express()
//const port =3000
const port = 4000 //65k port  server have to listen

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("sapna hii")
})
app.get('/login',(req,res)=>{
    res.send("jakhar...")
})

app.get('/youtube',(req, res)=>{
    res.send("<h1>sj Youtube channel shivoham2.5m</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(port,()=>{
//     console.log(`hiiiii ${port}`);
// })