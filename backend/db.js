const { MovingOutlined } = require("@mui/icons-material")
const mongoose = require("mongoose")
const db_name = ""
const mongoose_url = ``
const connectToMongoose = () =>{
    mongoose.connect(mongoose_url , () =>{
        console.log("Connected to the Data Base 👌")
    })
}
module.exports =  connectToMongoose
