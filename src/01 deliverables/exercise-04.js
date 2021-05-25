console.log("************** DELIVERABLE 04 *********************");

const books=[
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastacion", isRead: true},
    { title: "amor de madre", isRead: false},
    { title: "100 años de soledad", isRead: true},
  ];


function isBookRead(books, titleToSearch) {
    for (let i = 0; i <books.length;i++){
        if(books[i].title == titleToSearch){
            if(books[i].isRead === true){
                return respuesta = true
            }else{
                return respuesta =false
            }
        }
        else{
        let respuesta = false
        }
    }
    return respuesta
} 

/*
OOOO copiandome un poco de vuestra correcion y quda mucho mas limpio

function isBookRead(books,titleToSearch){
    var titulo = books.find(book =>{ return book.title === titleToSearch;});//busco del array que tenga el mismo nombre
    return Boolean(titulo) && titulo.isRead;
}
*/
console.log(isBookRead(books,"Devastacion")); // true
console.log(isBookRead(books,"Canción de hielo y fuego")); // false
console.log(isBookRead(books,"Harry Potter y la piedra filosofal")); // true
console.log(isBookRead(books,"La metamorfosis")); // false
console.log(isBookRead(books,"Las nuevas de Star Wars no son tan malas")); // false
console.log(isBookRead(books,"100 años de soledad")); // true
