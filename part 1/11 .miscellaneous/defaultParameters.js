// function multiply(x,y){
//     if (typeof y === "undefined"){
//         y=1
//     }
//     console.log (x*y);
// }
// multiply(4)

// function multiply (x,y){
//     y = typeof y === "undefined" ? 1 :y
//     console.log (x*y)
// }

const greet = (person ,greeting ='hi')=>{
    console.log(`${greeting},${person}!`)
}
greet('tim')