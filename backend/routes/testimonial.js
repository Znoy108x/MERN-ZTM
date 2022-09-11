const express = require("express")
const { findByIdAndUpdate } = require("../models/Testimonials")
const router = express.Router()
const Testimonial = require("../models/Testimonials")


router.get("/get-all-testimonial" , async (req , res)=>{
    try{
        const all_testimonials = await Testimonial.find()
        return res.status(200).json({success : true , data : all_testimonials})
    }catch(err){
        return res.status(501).json({success : false , error : err})
    }
})


router.post("/add-testimonial" , async (req , res)=>{
    try{
        const test_data = await Testimonial.create(req.body)
        return res.status(200).json({success : true , data : test_data})
    }catch(err){
        return res.status(501).json({success : false , error : err})
    }
})

router.delete("/delete-testimonial/:id" , async (req,  res) =>{
    try{
        let test_del = Testimonial.findById(req.params.id)
        if(!test_del){
            return res.status(400).json({success : false , error : "Id not Found in the data base" })
        }
        await Testimonial.findByIdAndDelete(req.params.id)
        return res.status(200).json({success : true , message : `Successfully Deleted The User With This Id ${req.params.id}`})
    }catch(err){
        return res.status(501).json({success : false , error : err})
    }
})

router.put("/edit-testimonial/:id" , async (req ,res) => {
    try{
        let edit_data = Testimonial.findById(req.params.id)
        if(!edit_data){
            return res.status(400).json({success : false , error : "Id not Found in the data base"})
        }
        const update_val_testimonials = {}
        const {name , role , person_img , company_logo , description , linked_in ,git_hub ,twitter ,mediam} = req.body
        if(name){
            update_val_testimonials["name"] = name
        }
        if(role){
            update_val_testimonials["role"] = role
        }
        if(person_img){
            update_val_testimonials["person_img"] = person_img
        }
        if(company_logo){
            update_val_testimonials["company_logo"] = company_logo
        }
        if(description){
            update_val_testimonials["description"] = description
        }
        if(linked_in){
            update_val_testimonials["linked_in"] = linked_in
        }
        if(git_hub){
            update_val_testimonials["git_hub"] = git_hub
        }
        if(twitter){
            update_val_testimonials["twitter"] = twitter
        }
        if(mediam){
            update_val_testimonials["mediam"] = mediam
        }
        await Testimonial.findByIdAndUpdate(req.params.id , {$set : update_val_testimonials})
        return res.status(200).json({success : true , message : `Successfully Updated The User With This Id ${req.params.id}`})
    }catch(err){
        return res.status(501).json({success : false , error  :err})
    }
})

module.exports = router