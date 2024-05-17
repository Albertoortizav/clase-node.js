const { getRandomValues } = require("crypto")
const fs = require ("fs")

const file = "dbFile.json"
const command = process.argv[2]
const koder = process.argv[3]

function init(){
if(!fs.existsSync(file)){
  fs.writeFileSync(file,JSON.stringify({koders:[]}))
}
selection()
console.log("Escribe rules para ver las instrucciones")
}

function selection (){
   switch (command){
    case "add":
    add()
    break
    case "ls":
      ls()
      break
      case "rm":
      rm()
      break
      case "reset":
        reset()
        break
      case "rules":
        rules()
        break
        
   }
}
function add(newkoder){
    newkoder=koder
    element=readJson()
   element.push(newkoder)
   newJson(element)
 ls()
}

function ls (){
  element=readJson()
   if(element.length===0){
    console.log("Koders list: EMPTY ")
   }
  element.forEach((element, idx) => {
    console.log(idx, element)
  });
    
}
function rm(rmkoder){
  rmkoder=koder
  element=readJson()
  element.splice(rmkoder,1)
  newJson(element)
  ls()
}
function reset (rs){
  rs=command
  newJson([])
  ls()
}
function rules (){
  console.log('Instrucciones de llenado: escribir: ')
  console.log(" escribir: add seguido del nombre")
  console.log(" escribir: rm seguido del numero del nombre a borrar")
  console.log("escribir: reset para borrar todo")
  console.log("escribir: ls para ver la lista de nombres")
}
function readJson(){
  const list =fs.readFileSync(file,"utf8")
  return JSON.parse(list).koders
}
function newJson(element){
  let newlist={koders: element}
 return fs.writeFileSync(file,JSON.stringify(newlist))
}

init()