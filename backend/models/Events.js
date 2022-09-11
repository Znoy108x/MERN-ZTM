const mongoose = require("mongoose")
const {Schema} = mongoose
const EventsSchema = new Schema({
    image : {
        type : String ,
        required:true
    },
    title : {
        type : String , 
        required : true,
        unique : true
    },
    description : {
        type : String ,
        required:true
    } , 
    link : {
        type : String ,
        required:true 
    }
} , {timestamps : true} )

const Event = mongoose.model("Event" , EventsSchema)
module.exports = Event