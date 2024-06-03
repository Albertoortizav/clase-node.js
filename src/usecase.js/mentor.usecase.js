const mentors=require("../models/mentors.model")


async function create(koderData){
const newKoder = await mentors.create(koderData)
return newKoder
}
async function getAll(){
 const allKoders=await mentors.find()
 return allKoders   
}
async function getById(id){
    const koder= await mentors.findById(id)
  return koder
}
async function deleteById(id){
const kodersDeleted= await mentors.findByIdAndDelete(id)
return kodersDeleted
}
async function updateById(id,newKoderData){
    const updatekoder= await mentors.findByIdAndUpdate(id,newKoderData,{new:true})
return updatekoder
}
module.exports={create,getAll,getById,deleteById,updateById}