const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {coursemodel} = require("./model/course")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{

    //res.send("success")

    let input = req.body
    //console.log(input)
    //res.send("success")

    let course = new coursemodel(input)
    //res.send("success")
    course.save()//save to db
    console.log(course)
    res.send("success")
    //to get this output it is must that express.json() in the above
})

app.get("/view",(req,res)=>{
    res.send("view")
})



app.listen(8080,()=>{
    console.log("Server Started")
})
