const createError=require("http-error")
const generation=require("../models/generation.model")

async function create (generation){
    const newGeneration= await generation.create(generation)
    return newGeneration
}

async function getAll(){
    const allGeneration=await generation.find()
    return allGeneration
}
async function getById(id){
    const thisgeneration=await generation.findById(id)
    return thisgeneration
}

async function deleteById(id){
const generationDelete= await generation.findByIdAndDelete(id)
return generationDelete
}

async function updateById(id,newGenerationData){
    const updateGeneration=await generation.findByIdAndUpdate(id,newGenerationData,{new:true})
    return updateGeneration
}

module.exports={create,getAll,getById,deleteById,updateById}