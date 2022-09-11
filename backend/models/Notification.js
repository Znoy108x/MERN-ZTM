const mongoose = require("mongoose")
const {Schema} = mongoose
const NotificationSchema = new Schema({
    email :{
        type : String, 
        required : true,
        unique : true
    }
} , {timestamps : true})
const Notification = mongoose.model("Notification",NotificationSchema)
module.exports = Notification