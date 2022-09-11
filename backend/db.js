const { MovingOutlined } = require("@mui/icons-material")
const mongoose = require("mongoose")
const db_name = "ztm"
const mongoose_url = `mongodb+srv://abhay:abhay@cluster0.i8prg.mongodb.net/${db_name}?retryWrites=true&w=majority`
const connectToMongoose = () =>{
    mongoose.connect(mongoose_url , () =>{
        console.log("Connected to the Data Base 👌")
    })
}
module.exports =  connectToMongoose