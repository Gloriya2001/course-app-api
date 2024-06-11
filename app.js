const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {coursemodel} = require("./model/course")

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://gloria2001:gloria2001@cluster0.ipg35w1.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{

    //res.send("success")

    let input = req.body//1.input read
    //console.log(input)
    //res.send("success")

    let course = new coursemodel(input)//2.pass input to model 
    //res.send("success")
    course.save()//3.save to db
    console.log(course)
     res.json({"status":"success"})//res.send("success")
    //to get this output it is must that express.json() in the above
})

app.get("/view",(req,res)=>{

    //res.send("view")
//use find to retrive value form db. if find is true executed in the thena()
    coursemodel.find().then(

        (data) => {
            res.json(data)
        }

    )

})



app.listen(8080,()=>{
    console.log("Server Started")
})
