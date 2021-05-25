function includes(array, value) {
  let contador=0

  for(i=0; i < array.length; i++){
      if(array[i] === value)
         contador=+1;
      
  };

  if(contador > 0)
      return true
  else
      return false
  
}
// Ejemplo:
console.log(includes([1, 2, 5], 6)); // false
console.log(includes([1, 3, 2], 1)); // true
console.log(includes([3, 2, 1], 2)); // true
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false