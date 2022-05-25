// for (variablein object){
//     statement
// }

const jeopardyWinnings ={
    regularPlay :2522700,
    watsonChallenge :300000,
    tournamentOfChampions: 500000,
    battleOfTheDecade : 100000
};

for (let prop in jeopardyWinnings){
    console.log(prop);
} //this will print the keys

for (let prop in jeopardyWinnings){
    console.log(jeopardyWinnings[prop])
}; //prints the values


/////////////////////////////////////////////////////////////Printing the average //////////////////
let total =0;
for (let prop in jeopardyWinnings){
    total += jeopardyWinnings[prop]
}

console.log(`Ken Jennings total earnings are ${total}.`)