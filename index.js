const server = require("./server.js")
const db = require("./db.js")
const port=8080

db.init()
server.listen(port,()=>{
    console.log('Server is running at 8080')
})