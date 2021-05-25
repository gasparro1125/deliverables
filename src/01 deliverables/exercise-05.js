console.log("************** DELIVERABLE 05 *********************");
class SlothMachine {
    constructor(){
        this.moneda = 0
    }

    const play = () => {
        this.moneda = + 1;
        const coinfall = () => Math.random() > 0.5 ? true : false
        let fall1 = coinfall();
        let fall2 = coinfall();
        let fall3 = coinfall();

        if(fall1 && fall2 && fall3 ==true){
            console.log("Congratulations!!!. You won <número de monedas> coins!! ->"+ fall1+ " " +fall2 +" " +fall3 )
        }else{
            console.log("Good luck next time!! ->"+ fall1+ " " +fall2 +" " +fall3)
        }
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
