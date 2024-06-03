const koders=require("../models/koders.model")


async function create(koderData){
const newKoder = await koders.create(koderData)
return newKoder
}
async function getAll(){
 const allKoders=await koders.find()
 return allKoders   
}
async function getById(id){
    const koder= await koders.findById(id)
  return koder
}
async function deleteById(id){
const kodersDeleted= await koders.findByIdAndDelete(id)
return kodersDeleted
}
async function updateById(id,newKoderData){
    const updatekoder= await koders.findByIdAndUpdate(id,newKoderData,{new:true})
return updatekoder
}
module.exports={create,getAll,getById,deleteById,updateById}