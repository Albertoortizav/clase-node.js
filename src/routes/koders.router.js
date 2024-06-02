const express=require("express")
const kodersUseCase=require("../usecases/koder.usecase")

const router=express.Router()

 router.get("/",async (request,response)=>{
try {
    const koders= await kodersUseCase.getAll()
    response.json({
        succes:true,
        data:{koders}
    })
} catch (error) {
    response.status(error.status || 500)
    response.json({
        success:false,
        error: error.message,
     
    })
}
    
})

router.post("/",async (request,response)=>{
    try {
        const koderCreated = await kodersUseCase.create(request.body)
        response.json({
            success:true,
            data:{koder:koderCreated}
        })
    } catch (error) {
        response.status(error.status || 500)
    response.json({
        success:false,
        error: error.message,
    })
    }
})
router.get('/:id',async (request, response)=>{
try {
    const id=request.params.id
    const koder=await kodersUseCase.getById(id)
   response.json({
    success:true,
    data: {koder}
   })
} catch (error) {
    response.status(error.status || 500)
    response.json({
        success:false,
        error: error.message,
    })
}
})

router.delete('/:id',async (request,response)=>{
try {
    const { id }= request.params
    const koderDeleted=await kodersUseCase.deleteById(id)
    response.json({
        success:true,
        data: {koder:koderDeleted}
    })
} catch (error) {
    response.status(error.status || 500)
    response.json({
        success:false,
        error: error.message,
    }) 
}
})

router.patch('/:id',async(request, response)=>{
    try {
       const {id}=request.params 
       const koderUpdated= await kodersUseCase.updateById(id,request.body)
       response.json({
        success:true,
        data : {koder:koderUpdated}
       })
    } catch (error) {
        express.response.status(error.status || 500)
        response.json({
            success:false,
            error: error.message
        })
    }
})
module.exports=router