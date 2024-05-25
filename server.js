const express=require("express")
const server=express()

server.use(express.json())
server.get("/",(request,response)=>{
response.json({
    message:"Kodemia APIv1"
})
})
module.exports=server
