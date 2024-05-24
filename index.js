const fs = require('fs')
const express = require('express')
const { reverse } = require('dns')
const server=express()
const file="koders.json"
const koders=[]
server.use(express.json())
function init(){
    if(!fs.existsSync(file)){
        fs.writeFileSync(file,JSON.stringify({koders}))
    }
}

server.get('/koders',(request,response)=>{
   const json=fs.readFileSync(file,"utf-8")
   const list=JSON.parse(json).koders
    response.json({
    message:"koders list",
    list:list
   })
})

server.post('/koders',(request,response)=>{
    const json=fs.readFileSync(file,"utf-8")
   const newJson= JSON.parse(json).koders
   const newKoder=request.body.koder
   if(newKoder.isActive===false){
    response.status(400)
    return response.json({
        message:"This member is not active"
     })
   }else if(!newKoder.name ||
     !newKoder.generation || 
     !newKoder.gender ||
      !newKoder.age ||
      !newKoder.isActive ||
      newKoder.name==="" ||
      newKoder.generation===undefined || 
      newKoder.gender==="" ||
       newKoder.age===undefined ||
    newKoder.isActive===undefined){
       response.status(400)
        return response.json({
            message:"Please check the elements"
        })
    }
   newJson.push(newKoder)
   let newlist={koders:newJson}
  fs.writeFileSync(file, JSON.stringify(newlist))
   response.json({
    message:"koder added",
    koder:newKoder
   })

})
server.delete("/koders/:idx",(request,response)=>{
    const json=fs.readFileSync(file,"utf-8")
   const newJson= JSON.parse(json).koders
    const identificador = request.params.idx
    if(isNaN(identificador)){
        response.status(400)
       return response.json({
            message:"NaN"
        })
    }
    const convert = parseInt(identificador)
    if(convert<0 || convert>=newJson.length){
        response.status(400)
       return response.json({
            message:"invalid number"
        })
    }
    newJson.splice(convert, 1)
    let newlist={koders:newJson}
  fs.writeFileSync(file, JSON.stringify(newlist))
    response.json({
        message:"koder delete",
        koder: `idx: ${convert} `
    })
})

server.delete("/koders",(request,response)=>{
    const newlist={koders:[]}
    fs.writeFileSync(file,JSON.stringify(newlist))
    response.json({
        message: "list deleted"
    })
})
server.listen(8080,()=>{
    console.log("server on port: 8080")
})
init()