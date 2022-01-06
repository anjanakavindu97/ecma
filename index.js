
//import express module
const express = require('express')
const res = require('express/lib/response')

//create application object
const app = express()

//define port
const port = 3000

//gettmapping
app.get('/',(req,res)=>{
    res.sendStatus(200)
})

//GetMapping add two numbers
app.get('/add/:num1/num2' ,(req,rec)=>{
    const{num1,num2} = req.params
    const ans = num1 + num2;
    res.send(ans)
})
//called app.listen method
app.listen(port,()=>{
    console.log('Server is start up')
})