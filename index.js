
//import express module
const express = require('express')

//create application object
const app = express()

//define port
const port = 3000

//gettmapping
app.get('/',(req,res)=>{
    res.sendStatus(200)
})

//called app.listen method
app.listen(port,()=>{
    console.log('Server is start up')
})