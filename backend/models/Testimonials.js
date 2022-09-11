const { ModeEditOutline } = require("@mui/icons-material")
const mongoose = require("mongoose")
const {Schema} = mongoose
const TestimonialSchema = new Schema({
    name : {
        type : String , 
        required : true
    },
    role : {
        type : String , 
        required : true
    },
    person_img : {
        type : String ,
        required:true,
        unique : true
    },
    company_logo : {
        type : String ,
        required:true,
        unique : true
    } , 
    description : {
        type : String ,
        required:true
    } , 
    linked_in : {
        type : String ,
        required:true , 
        unique : true
    } , 
    git_hub : {
        type : String ,
        required:true , 
        unique : true
    } , 
    twitter : {
        type : String ,
        unique : true
    } , 
    mediam : {
        type : String ,
        unique : true
    }
} , {timestamps : true} )

const Testimonial = mongoose.model("Testimonial" , TestimonialSchema)
module.exports = Testimonial