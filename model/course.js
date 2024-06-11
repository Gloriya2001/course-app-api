const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "title":{type:String,required:true},
        "description":{type:String,required:true},
        "date":{type:String,required:true},
        "duration":{type:String,required:true},
        "venue":{type:String,required:true},
        "trainerName":{type:String,required:true}
    }
)

let coursemodel = mongoose.model("employees",schema);
module.exports = {coursemodel}