function biggestWord(str){
    let maxLenght = 0;
    let word = str.split(" "); //divide el array por espacios en blanco
    let maxWord ="";

    for(i=0; i < word.length; i++){
        if (word[i].length > maxLenght){
            maxLenght = word[i].length
            maxWord= word[i]
        }
    };
    return console.log(maxWord);
}

biggestWord("hola mamam te quierpo");
biggestWord("You also know who is Mia KHALIFA");
