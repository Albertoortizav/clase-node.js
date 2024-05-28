const express = require('express')
const server = express()
const kodersUseCase=require("./koder.usecase")

server.use(express.json())

server.get("/",(request,response)=>{
    response.json({
        message:"Kodemia APIv1"
    })
})

server.get("/koders",(request,response)=>{
    try {
        const koders=kodersUseCase.getAll()
        response.json({
            message:"All koders",
            data:{
              koders:koders
            }
        })
    } catch (error) {
        response.status(error.status ||500)

        response.json({
            error:error.message
        })
    }
})

server.post("/koders",(request,response)=>{
    try {
      const newKoder = request.body
      const koders = kodersUseCase.add(newKoder)
      response.json({
        message:"Koder added",
        data:{koders}
      })  
    } catch (error) {
        response.status(error.status ||500)

        response.json({
            error:error.message
        }) 
    }
})
server.delete("/koders",(request,response)=>{
    try {
        const koders = kodersUseCase.deleteAll()
        response.json({
            message: "All koders deleted",
            data:{koders},
        })
    } catch (error) {
        response.status(error.status ||500)

        response.json({
            error:error.message
        }) 
    }
})

server.delete("/koders/:name",(request,response)=>{
    try {
        const name =request.params.name
        const koders=kodersUseCase.deleteByName(name)
        response.json({
            message:"koders deleted",
            data:{koders}
        })
    } catch (error) {
        response.status(error.status ||500)

        response.json({
            error:error.message
        })
    }
})
server.get("/mentors",(request,response)=>{
    try {
        const mentors=kodersUseCase.getAllMentor()
        response.json({
            message:"All mentors",
            data:{
              mentors:mentors
            }
        })
    } catch (error) {
        response.status(error.status ||500)

        response.json({
            error:error.message
        })
    }
})

server.post("/mentors",(request,response)=>{
    try {
      const newMentor = request.body
      const mentors = kodersUseCase.addMentor(newMentor)
      response.json({
        message:"Mentor added",
        data:{mentors}
      })  
    } catch (error) {
        response.status(error.status ||500)

        response.json({
            error:error.message
        }) 
    }
})
server.delete("/mentors",(request,response)=>{
    try {
        const mentors = kodersUseCase.deleteAllMentor()
        response.json({
            message: "All mentors deleted",
            data:{mentors},
        })
    } catch (error) {
        response.status(error.status ||500)

        response.json({
            error:error.message
        }) 
    }
})

server.delete("/mentors/:name",(request,response)=>{
    try {
        const name =request.params.name
        const mentors=kodersUseCase.deleteByNameMentor(name)
        response.json({
            message:"mentor deleted",
            data:{mentors}
        })
    } catch (error) {
        response.status(error.status ||500)

        response.json({
            error:error.message
        })
    }
})
module.exports=server