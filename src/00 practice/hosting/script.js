//Apartado -A
/*

function f() {
    console.log(a);
    console.log(g());
  
    var a = "good job!";
    function g() {
      return a;
    }
    console.log(a); 
 }
 f();
    // ya que por hostin tanto la declaracion
    // de la funcion como varialble subiria arriba, dando 
    //undefined
    //undefined
    //good job

*/

 //Apartado -B
 /*
 var a = 1;

(function() {
  console.log(a);
  var a = 2;
  b = 4;
  var c = 3;
})();

console.log(a);
console.log(b);
console.log(c);
*/
// el primer var tiene valor 1 y entra a la funcion con dicho valor 1,
// pero como volvemos a declarar se queda el var a;
//por lo que estra vacio y saldra indefinido
//luego de salir la variable a y b si saldran con 1 y 4 y por ultimo no encontrara definido la c



//apartado -C
f();
var a = 1;


function f() {
  console.log(a);
  b = 4;
  var c = 3;
}

console.log(a);
console.log(b);
console.log(c);

// dara undefined
//      1
//     4
// error no declarado