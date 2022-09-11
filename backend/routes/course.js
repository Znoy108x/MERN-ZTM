const { json } = require("express")
const express = require("express")
const router = express.Router()
const Courses = require("../models/Courses")

router.get("/get-courses" , async (req , res) => {
    try{
        const all_courses = await Courses.find()
        return res.status(200).json({success : true , data : all_courses})
    }catch(err){
        return res.status(500).json({success : false , error : err})
    }
})
router.post("/add-course" , async (req , res) => {
    try{
        const course_data = await Courses.create(req.body)
        return res.status(200).json({success : true , data : course_data})

    }catch(err){
        return res.status(500).json({success : false , error : err})
    }
})

router.delete("/delete-course/:id" , async (req , res) => {
    try{
        const isPresent = await Courses.findById(req.params.id)
        if(!isPresent){
            return res.status(400).json({success : false , message : "Course Not Present In The Data Base"})
        }
        await Courses.findByIdAndDelete(req.params.id)
        return res.status(200).json({success : true , message : `Successfully Deleted The Course With This Id ${req.params.id}`})
    }catch(err){
        return res.status(500).json({success : false , error : err})
    }
})
router.put("/edit-courses/:id" , async (req , res)=>{
    try{
        const new_course_data = {}
        const {course_img,title,Duration,Description_one,Description_two,Type,Last_Updated,Contents,Syllabus,Prerequisites,Overview,Topics_You_Will_Learn,Project,Instructors,Qna,videos,reviews} = req.body

        if(course_img){
            new_course_data["course_img"] = course_img
        }
        if(title){
            new_course_data["title"] = title 
        }
        if(Duration){
            new_course_data["Duration"] = Duration 
        }
        if(Description_one){
            new_course_data["Description_one"] = Description_one 
        }
        if(Description_two){
            new_course_data["Description_two"] = Description_two 
        }
        if(Type){
            new_course_data["Type"] = Type
        }
        if(Last_Updated){
            new_course_data["Last_Updated"] = Last_Updated
        }
        if(Contents){
            new_course_data["Contents"] = Contents
        }
        if(Syllabus){
            new_course_data["Syllabus"] = Syllabus 
        }
        if(Prerequisites){
            new_course_data["Prerequisites"] = Prerequisites 
        }
        if(Overview){
            new_course_data["Overview"] = Overview
        }
        if(Topics_You_Will_Learn){
            new_course_data["Topics_You_Will_Learn"] = Topics_You_Will_Learn
        }
        if(Project){
            new_course_data["Project"] = Project
        }
        if(Instructors){
            new_course_data["Instructors"] = Instructors
        }
        if(Qna){
            new_course_data["Qna"] =Qna 
        }
        if(videos){
            new_course_data["videos"] = videos
        }
        else{
            new_course_data["reviews"] =  reviews
        }
        await Courses.findByIdAndUpdate(req.params.id , {$set  : new_course_data})
        return res.status(200).json({success : true , message : `Successfully Updated The Course With This Id ${req.params.id}`})
    }catch(err){
        return res.status(500).json({success : false , error : err})
    }
})
module.exports = router