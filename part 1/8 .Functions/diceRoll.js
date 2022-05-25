function rollDie (){
    let roll = Math.floor(Math.random() * 6) +1;
    console.log(`Rolled ${roll}`)

}

//rollDie();

function  throwDie (){
    // rollDie();
    // rollDie();
    // rollDie();
    // rollDie();
    // rollDie();
    for (let i = 0;i < 7;i++){
        rollDie()
    }
}

throwDie()