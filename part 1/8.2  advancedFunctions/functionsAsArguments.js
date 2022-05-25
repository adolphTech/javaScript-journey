//function that accepts a function as an argument
function  callThreeTimes(f){
    f();
    f();
    f();
}

function cry(){
    console.log('booo hoo im so saad')
}
function rage(){
    console.log('I HATE EVERYTHING !')
}
//callThreeTimes(cry)
function repeatNTimes(action,num){
    for (let i =0;i<num;i++){
        action()
    }
}

//repeatNTimes(cry,5000)


//accept two functions and randomly call one of them and not both

function pick1 (f1,f2){
   let rand = Math.random() ;
   if (rand<0.5){
       f1()
   }
   else {
       f2()
   }
}

    pick1(cry,rage);