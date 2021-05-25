
function Person(name,sername) {
    this.name = name
    this.sername = sername
  }
  
  Person.prototype.walk = function() {
    console.log("I'm walking");
  };
  
  var john = new Person("John","Titus");
  var marina= new Person("marina","escobar");


  function values(obj) {
    let reserva = ""
    for (const key in obj){
        if(obj.hasOwnProperty.call(obj,key)) {
            reserva = reserva + " " +  obj[key] ;
        }
    }
    return reserva
  }

console.log(values(marina));
console.log(values(john));// ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]