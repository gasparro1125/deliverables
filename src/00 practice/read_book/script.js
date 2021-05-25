var books=[
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastacion", isRead: true},
    { title: "amor de madre", isRead: false},
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

  console.log(isBookRead(books,"Devastacion")); // si leido
  console.log(isBookRead(books,"Canción de hielo y fuego")); // no leido
  console.log(isBookRead(books,"Harry Potter y la piedra filosofal")); // si leido 
  console.log(isBookRead(books,"La metamorfosis")); // false
