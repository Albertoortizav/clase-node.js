require("dotenv").config()
const app=require("./src/server")
const db=require("./src/lib/db")
const PORT=process.env.PORT || 8080
db.connect().then(()=>{
    console.log("DB connected")
    app.listen(port,()=>{
        console.log("Server ready on port 8081")
    })
}).catch((error)=>{
    console.log("DB connection error: ",error)
})
