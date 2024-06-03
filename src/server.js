const express = require("express")
const server=express()
const kodersRouter=require("./routes/koders.router")
const mentorRouter=require("./routes/mentors.router")
server.use(express.json())
server.use("/Koder",kodersRouter)
server.use("/mentors",mentorRouter)
server.get("/",(request,response)=>{
response.json({
    message:"koders-APIv1"
})
})
module.exports=server