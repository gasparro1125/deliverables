function reverseText(text) {
    let words = text.split(" ")//divide el array por espacios en blanco
    let texto = words.reverse();//invierte un array
    let nuevo = "";

    for(i=0; i < words.length; i++){
        let espacios = " ";
        nuevo = nuevo + words[i] + espacios
    }
    console.log(nuevo);
}

reverseText("hola mama te quiero")
