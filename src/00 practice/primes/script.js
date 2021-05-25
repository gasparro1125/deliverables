function primo(a,b){
    for(a;a<=b;a++){
        let divisor = 1;
        let contador = 0;
        let num = a;
        do{
            if(num%divisor == 0){
                contador++
            }
            divisor++
        }while(divisor <= num);

        if(contador == 2){
            console.log(num + " Si es primo");
        }else{
            console.log(num + " No es primo");
        }
    }
}


primo(0,100)
