// clonado de ojeto

const persona = { name: "Clara", sername: "Ibañez", age: 9999, amigos: {clara: "tonta", raul:"listo"},};

function clone(objeto){
    const clon = objeto;
    return console.log(clon);
}
clone(persona)
console.log(persona)


////////////////////////////////////////////////////////////////////////////////////////////////

const animal = {name: "Vaca", piernas: 4, alimentacion:"pasto"};

function suma(a,b){
    const sum = Object.assign(a,b)
    console.log(sum)
}
suma(animal, persona)
