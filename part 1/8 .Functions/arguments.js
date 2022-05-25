function greeting (person){
    console.log(`Hi  ${person}`)
};
greeting('Tim');

function rollDie (){
    let roll = Math.floor(Math.random() * 6) +1;
    console.log(`Rolled ${roll}`)

}

function  throwdice(numRolls){
    for (let i =0;i< numRolls;i++){
      rollDie()
    }
}
throwdice(8)