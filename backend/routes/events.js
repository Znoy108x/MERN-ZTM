const express = require("express")
const { findByIdAndUpdate } = require("../models/Testimonials")
const router = express.Router()
const Event = require("../models/Events")
router.get("/get-all-events" , async (req , res)=>{
    try{
        const all_events = await Event.find()
        return res.status(200).json({success : true , data : all_events})
    }catch(err){
        return res.status(501).json({success : false , error : err})
    }
})
router.post("/add-event" , async (req , res)=>{
    try{
        const event_data = await Event.create(req.body)
        return res.status(200).json({success : true , data : event_data})
    }catch(err){
        return res.status(501).json({success : false , error : err})
    }
})
router.delete("/delete-event/:id" , async (req,  res) =>{
    try{
        let event_del = Event.findById(req.params.id)
        if(!event_del){
            return res.status(400).json({success : false , error : "Id not Found in the data base" })
        }
        await Event.findByIdAndDelete(req.params.id)
        return res.status(200).json({success : true , message : `Successfully Deleted The Event With This Id ${req.params.id}`})
    }catch(err){
        return res.status(501).json({success : false , error : err})
    }
})

router.put("/edit-event/:id" , async (req ,res) => {
    try{
        let edit_event = Event.findById(req.params.id)
        if(!edit_event){
            return res.status(400).json({success : false , error : "Id not Found in the data base"})
        }
        const update_val_event = {}
        const {title , image , description , link } = req.body
        if(title){
            update_val_event["title"] = title
        }
        if(image){
            update_val_event["image"] = person_img
        }
        if(description){
            update_val_event["description"] = description
        }
        if(link){
            update_val_event["link"] = link
        }
        await Event.findByIdAndUpdate(req.params.id , {$set : update_val_event})
        return res.status(200).json({success : true , message : `Successfully Updated The Event With This Id ${req.params.id}`})
    }catch(err){
        return res.status(501).json({success : false , error  :err})
    }
})

module.exports = router