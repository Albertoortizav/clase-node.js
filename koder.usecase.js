const db=require("./db")
function add(newKoder){
    if(!newKoder.name) throw new Error('name is required')
     
    if(!newKoder.generation) throw new Error ('generation is required')
     
    newKoder.generation=parseInt(newKoder.generation)
    if(isNaN(newKoder.generation)) throw new Error('generation must be a number')
     if(newKoder.generation<=0) throw new Error('generation must be greater than 0') 
     
        if(!newKoder.gender) throw new Error ('gender is required')
        if(!["f","m","nb"].includes(newKoder.gender.toLowerCase())){
            throw new Error ("only m, f and nb values are allowed")
        }

    if(!newKoder.age) throw new Error ("age is required")
    newKoder.age =parseInt(newKoder.age)
    if(isNaN(newKoder.age)) throw new Error ('age must be a number')
    if(newKoder.age <=0) throw new Error ('age must be greater than 0')
    
    if(typeof newKoder.isActive!=="boolean") throw new Error("isActive must be boolean")
    
    const dbData=db.read()
   dbData.koders.push(newKoder)
    db.write(dbData)
    return dbData.koders
}

function deleteAll(){
const dbData =db.read()
dbData.koders=[]
db.write(dbData)
return dbData.koders
}

function deleteByName(name){
    if(!name) throw new Error('names is required')
    
    const dbData =db.read()

    dbData.koders =dbData.koders.filter((koder)=>koder.name!==name)

    db.write(dbData)

    return dbData.koders
}

function getAll(){
 const dbData =db.read()
  return dbData.koders
}

function addMentor(newMentor){
    if(!newMentor.name) throw new Error('name is required')
     
    if(!newMentor.generation) throw new Error ('generation is required')
     
        newMentor.generation=parseInt(newMentor.generation)
    if(isNaN(newMentor.generation)) throw new Error('generation must be a number')
     if(newMentor.generation<=0) throw new Error('generation must be greater than 0') 
     
        if(!newMentor.gender) throw new Error ('gender is required')
        if(!["f","m","nb"].includes(newMentor.gender.toLowerCase())){
            throw new Error ("only m, f and nb values are allowed")
        }

    if(!newMentor.age) throw new Error ("age is required")
        newMentor.age =parseInt(newMentor.age)
    if(isNaN(newMentor.age)) throw new Error ('age must be a number')
    if(newMentor.age <=0) throw new Error ('age must be greater than 0')
    
    if(typeof newMentor.isActive!=="boolean") throw new Error("isActive must be boolean")
    
    const dbData=db.read()
   dbData.mentors.push(newMentor)
    db.write(dbData)
    return dbData.mentors
}

function deleteAllMentor(){
const dbData =db.read()
dbData.mentors=[]
db.write(dbData)
return dbData.mentors
}

function deleteByNameMentor(name){
    if(!name) throw new Error('names is required')
    
    const dbData =db.read()

    dbData.mentors =dbData.mentors.filter((mentor)=>mentor.name!==name)

    db.write(dbData)

    return dbData.mentors
}

function getAllMentor(){
 const dbData =db.read()
  return dbData.mentors
}

module.exports={
    add,
    deleteAll,
    deleteByName,
    getAll,
    addMentor,
    deleteAllMentor,
    deleteByNameMentor,
    getAllMentor,
}