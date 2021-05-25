console.log("************** DELIVERABLE 03 *********************");
//clone
const persona = { name: "Clara", sername: "Ibañez", age: 9999, amigos: {clara: "tonta", raul:"listo"}, alimentacion:"cafe colombiano"};
function clone(source) {
    const cloneA = {}
    for (const key in source){
        cloneA[key] = source[key]
    }
    return cloneA
}
console.log("*******Clone*******")
console.log("objeto base :"persona)
console.log("clon : "clone(persona))
console.log("comparacion : " persona === clone(persona)) // no son misma referencia

//Merge
console.log("*******Merge*******")
const animal = {name: "Vaca", piernas: 4, alimentacion:"pasto"};

function merge(a,b){
    const sum = Object.assign(b,a) // con assign es func(target,source), es decir al reves de lo que pedis por eso le doy la vuelta
    return sum
}
console.log("***********Merge")
console.log("objeto base source :"persona)
console.log("objeto base target :"animal)
console.log("clon : "merge(persona,animal))

// o tambien se podria
/*
function merge(source, target) {
    const cloneB = clone(target)
    for (const key in source){
        cloneB[key] = source[key]
    }
    return cloneB
}
console.log("objeto base source :"persona)
console.log("objeto base target :"animal)
console.log("clon : "merge(persona,animal))
*/