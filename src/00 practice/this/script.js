var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());// Jimenez
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());// Perez
console.log(surnameFunction.call(person));//Gonzalez