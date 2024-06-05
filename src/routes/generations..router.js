const express=require("express")
const router=express.Router()
const generationUseCase=require("../usecase.js/generatons.usecase")

router.get("/",async(request,response)=>{
    try {
       const generation=await generationUseCase.getAll() 
    response.json({
        success:true,
        data:{generation}
    })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false,
            error:error.message
        })
    }
})
router.post('/',async (request,response)=>{
    try {
       const generationCreated=await generationUseCase.create(request.body) 
       response.json({
        success:true,
        data:{generation: generationCreated}
       })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false,
            error:error.message
        })
    }
})
router.get("/:id",async (request,response)=>{
    try {
       const id=request.params.id 
       const generation=await generationUseCase.getById(id)
       response.json({
        success:true,
        data:{generation}
       })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false,
            error:error.message
        })
    }
})
router.delete("/:id",async(request,response)=>{
    try {
        const {id}=request.params
        const generationDeleted=await generationUseCase.deleteById(id)
        response.json({
            success:true,
            data:{generation:generationDeleted}
           })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false,
            error:error.message
        })
    }
})

router.patch("/:id",async(request,response)=>{
    try {
        const {id} =request.params
        const generationUpdate=await generationUseCase.updateById(id)
        response.json({
            success:true,
            data:{generation:generationUpdate}
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false,
            error:error.message
        })
    }
})
module.exports=router