require('dotenv').config()
console.log(process.env)
const mongoose = require("mongoose")
const express= require("express")
const server=express()
server.use(express.json())
const {DB_USER, DB_PASSWORD,DB_HOST,DB_NAME}=process.env
const MONGO_URI =`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
const Koder = mongoose.model("Koder",new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:2,
        masLenght:100,

    },
    lastName:{
        type:String,
        required:true,
        minLength:2,
        maxLength:100,

    },
    email:{
        type:String,
        required:true,
        match:  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    birthDate:{
        type:Date,
        required:false,

    },
    generation:{
        type:Number,
        min:1,
        max:100
    }

}))
mongoose.connect(MONGO_URI).then(()=>{
    console.log("Conexion exitosa")
    server.post("/koder",(request,response)=>{
        const firtsName=request.body.firstName
        const lastName=request.body.lastName 
        const email =request.body.email
        const birthDate =request.body.birthDate
        const generation = request.body.generation
        
        Koder.create({
            firstName:firtsName,
            lastName:lastName,
            email:email,
            birthDate:new Date (birthDate),
            generation:generation
        }).then(()=>{
            console.log("koder created")
            response.json({
                message:"koder ready on db"
            })
        }).catch(()=>{console.log("Error")
             response.json({
    message: "Error please check "
 })
        })
    })
}).catch((error)=>{
 console.log("Error al conectar", error)
})

server.listen(8080,()=>{
 console.log("Server running on port: 8080")
})