const clase_A = {
 
    David: Math.round(Math.random()*10),
    Carla: Math.round(Math.random()*10),
    Josefina: Math.round(Math.random()*10),
    Roberto: Math.round(Math.random()*10),
    Marina: Math.round(Math.random()*10),
    
};

function notamedia(nombre ,value){
    switch (value) {
        case 10:
        case 9:
            console.log(nombre + " tiene un Sobresaliente")
            break;
        case 8:
        case 7:
            console.log(nombre + " tiene un Notable")
            break;
        case 6:
        case 5:
            console.log(nombre + " tiene un suficiente ")
            break;
        case 4:
            console.log(nombre + " tiene un Deficiente")
            break;
        default:
            console.log(nombre + " se ha estampado")
            break;
    }
}


for (const key in clase_A) {
    if (clase_A.hasOwnProperty.call(clase_A, key)){
        notamedia(key,clase_A[key]);
    }
}
