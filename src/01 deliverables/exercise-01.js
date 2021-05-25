console.log("************** DELIVERABLE 01 *********************");

//Head
const head = (first,..arr) => first;
console.log( "Head: " head([4,"b","c","d","e"]));

//Tail
const tail = ([first,...arr]) => arr;
console.log( "tail: " tail([4,"b","c","d","e"]));


//init
const init = (arr) => arr.slice(0,arr.length-1);
console.log( "last: " init([4,"b","c","d","e"]));

//last
const last = (arr) => arr.pop();
console.log( "init: " last([4,"b","c","d","e",5]));