const mongoose = require("mongoose")
const {Schema} = mongoose
const CourseSchema = new Schema({
    course_img : {
        type : String,
        required : true
    },
    title : {
        type : String , 
        required:true
    },
    Duration : {
        type : String , 
        required : true
    },
    Lessons : {
        type : String, 
        required : true
    },
    Description_one : {
        type : String , 
        required : true
    },
    Description_two :{
        type : String , 
        required : true
    },
    Type:{
        type : String , 
        required : true
    },
    Last_Updated:{
        type : String , 
        required : true
    },
    Contents:{
        type : Object , 
        required : true
    },
    Syllabus : {
        type : Array , 
        required : true
    },
    Prerequisites : {
        type : Array , 
        required : true
    },
    Overview:{
        type : String , 
        required : true
    },
    Topics_You_Will_Learn:{
        type : Array , 
        required : true
    }
    ,
    Project : {
        type : Array , 
        required : true
    },
    Instructors:{
        type : Array , 
        required : true
    },
    Qna:{
        type : Array , 
        required : true
    },
    videos:{
        type : Array , 
        required : true
    },
    reviews:{
        type : Array , 
        required : true
    }
},{timestamps : true})
const Course = mongoose.model("Course" , CourseSchema)
module.exports = Course