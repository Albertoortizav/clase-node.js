const express= require("express")
const koderUseCase=require("../usecase.js/koder.usecase")
const router=express.Router()
const auth =require("../middlewares/auth.midleware")
router.get("/",auth,async(request,response)=>{
    try {
       const koders=await koderUseCase.getAll() 
    response.json({
        success:true,
        data:{koders}
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
       const koderCreated=await koderUseCase.create(request.body) 
       response.json({
        success:true,
        data:{koder:koderCreated}
       })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false,
            error:error.message
        })
    }
})
router.get("/:id",auth,async (request,response)=>{
    try {
       const id=request.params.id 
       const koder=await koderUseCase.getById(id)
       response.json({
        success:true,
        data:{koder}
       })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false,
            error:error.message
        })
    }
})
router.delete("/:id",auth,async(request,response)=>{
    try {
        const {id}=request.params
        const kodersDeleted=await koderUseCase.deleteById(id)
        response.json({
            success:true,
            data:{koder:kodersDeleted}
           })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false,
            error:error.message
        })
    }
})

router.patch("/:id",auth,async(request,response)=>{
    try {
        const {id} =request.params
        const koderUpdate=await koderUseCase.updateById(id)
        response.json({
            success:true,
            data:{koder:koderUpdate}
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