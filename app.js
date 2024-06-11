const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express())

app.post("/add",(req,res)=>{
    res.send("success")
})

app.get("/view",(req,res)=>{
    res.send("view")
})



app.listen(8080,()=>{
    console.log("Server Started")
})
