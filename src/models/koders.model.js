const mongoose=require("mongoose")

const modelName='koders'

const schema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:2,
        masLenght:100,

    },
    lastName:{
        type:String,
        required:false,
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
    password:{
        type:String,
        required:true
    },
    /*generation:{
        type:Number,
        min:1,
        max:100
    },*/
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports= mongoose.model(modelName, schema)

