function add(x,y){
    console.log(x+y) //return should be used
}

const subtract = function(x,y){
    console.log(x-y) //return should be used
}
function multiply(x,y){
    console.log(x*y) //return should be used
}
const divide  = function(x,y){
    console.log(x/y) //return should be used
}

const operations = [add,subtract,multiply,divide]
for (let func of  operations){
  let result = func(30,5)
    console.log(result)
}

const thing = {
    doSomething : multiply
}
 console.log(thing.doSomething(50,2));

//console.log (operations[1](20,4));