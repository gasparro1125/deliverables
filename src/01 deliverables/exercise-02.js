console.log("************** DELIVERABLE 02 *********************");

const concat = ([...a],[...b]) => { a.push(...b) console.log(a) }; 
concat([1,2,3,4,"ARRIBA"],["ESPAÑA",5,6,7,8,9])