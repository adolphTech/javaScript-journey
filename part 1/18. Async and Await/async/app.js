// async function greet(){
// return 'HELLO';
// }

// greet().then((val)=>{
//     console.log("promise resolved with ;",val)
// })

// async function add(x,y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         throw 'X and Y must be numbers !'
//     }
//     return (x+y)
// }


 
function add (x,y){
    return new Promise((resolve,reject)=>{
        if(typeof x !== 'number' || typeof y !== 'number'){
            reject('X and Y must be numbers !!!')
        }
        resolve(x+y)
    })

}

/////////////////////////////////////////////////////////////manual