const prompt = require("prompt-sync")()
let eleccion=""
    let i=0
    let lista=[]
    let lista2=[]
    let z=1
    let nombreLargo=""
    let nombreCorto=""
    let nombreRepetido=""
    nombres =()=>{
while(eleccion.toLowerCase()!=="no"){
    
        eleccion= prompt("Ingresa un nombre o escribe no para finalizar: ")
        if(eleccion!="no"){
            lista.push(eleccion)
            i++
        }
    if(eleccion.length>=nombreLargo.length) {
        nombreLargo=eleccion
        if(nombreCorto===""){
            nombreCorto=nombreLargo
        }
    }
    else if(eleccion.length <= nombreCorto.length && eleccion !="no") {
        nombreCorto=eleccion
    }
}


console.log("Lista de nombres: ")
for(j=0; j<=lista.length-1; j++){
 if(lista2.includes(lista[j])){
    nombreRepetido=lista[j]
    z++
 }
 else{
    lista2.push(lista[j])
 }
    console.log(j+1,":", lista[j])
}
console.log("No. de nombres ingresados: ",i)
console.log("Nombre mas largo: ", nombreLargo)
console.log("Nombre mas corto: ", nombreCorto)
console.log("nombre repetido: ", nombreRepetido,"", z, "veces")
    }

nombres()
