const express=require("express")
const router=express.Router()
const mentorsUseCase=require("../usecase.js/mentor.usecase")

router.get("/",async(request,response)=>{
    try {
       const mentors=await mentorsUseCase.getAll() 
    response.json({
        success:true,
        data:{mentors}
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
       const mentorCreated=await mentorsUseCase.create(request.body) 
       response.json({
        success:true,
        data:{koder:mentorCreated}
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
       const mentor=await mentorsUseCase.getById(id)
       response.json({
        success:true,
        data:{mentor}
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
        const mentorsDeleted=await mentorsUseCase.deleteById(id)
        response.json({
            success:true,
            data:{mentor: mentorsDeleted}
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
        const mentorUpdate=await mentorsUseCase.updateById(id)
        response.json({
            success:true,
            data:{mentor:mentorUpdate}
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