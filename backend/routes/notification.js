const express = require("express");
const { findById } = require("../models/Notification");
const router =  express.Router();
const Notification = require("../models/Notification")

router.post("/add-email" , async (req , res) => {
    try{
        const isPresent = await Notification.find({email : req.body.email})
        if(isPresent.length !== 0){
            return res.status(400).json({success : false , message : "Email already exists in the data base!"})
        }
        await Notification.create(req.body)
        return res.status(200).json({success : true , data : req.body.email})
    }catch(err){
        return res.status(500).json({success : false , error : err})
    }
})
module.exports = router