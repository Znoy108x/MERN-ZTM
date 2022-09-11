const express = require("express")
const cors = require("cors")
const connectToMongoose = require("./db")
const app = express()
app.use(express.json())
app.use(cors())
connectToMongoose()
// ------------ routes
app.use("/api" , require("./routes/testimonial"))
app.use("/api" , require("./routes/events"))
app.use("/api" , require("./routes/course"))
app.use("/api" , require("./routes/notification"))
// ------------ routes
const port = 5000
app.listen(port , ()=>{
    console.log("Running on Port 5000 👍")
})