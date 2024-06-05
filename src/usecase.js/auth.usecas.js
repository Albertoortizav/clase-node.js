const createError=require("http-errors")
const koders=require("../models/koders.model")
const jwt=require("../lib/jwt")
const encrypt=require("../lib/encrypt")

async function login(email,password){
const koder= await koders.findOne({email:email})
if(!koder){
    throw createError(401,"Invalid data")
}
const ispasswordValid=await encrypt.compare(password,koder.password)
if(!ispasswordValid){
    throw createError(401,"Invalid data")
}
const token=jwt.sign({id:koder._id})
return token
}

module.exports={login,}