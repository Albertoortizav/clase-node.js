const cors=require("cors")
const express = require("express")
const server=express()
const kodersRouter=require("./routes/koders.router")
const mentorRouter=require("./routes/mentors.router")
const authRouter=require("./routes/auth.router")
const generation=require("./routes/generations..router")
server.use(cors())
server.use(express.json())
server.use("/Koder",kodersRouter)
server.use("/mentors",mentorRouter)
server.use("/auth",authRouter)
server.use("/generations",generation)
server.get("/",(request,response)=>{
response.json({
    message:"koders-APIv1"
})
})
module.exports=server