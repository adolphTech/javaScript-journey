//BOOLEAN LOGIC
//  > GREATER THAN
// < LESS THAN
// != NOT EQUAL TO
// !==STRICTLY NOT EQUAL TO
// === STRICT EQUALITY
                 // == EQUALITY //
// doesnt care about the type
// 7 == '7'true

//always use triple equals


// if (1==1){
//     console.log("Its true")
// }


// let rating =2;
//
// if (rating < 3){
//     console.log('You are a superstar')
// }

                  //ELSE IF STATEMENT
// let rating = 3;
// if (rating===3) {
//     console.log("You are a Superstar")
// }
//     else if(rating ===2){
//         console.log("You meet expectations")
//     }
//     else if(rating===1){
//     console.log('You need to improve')
//     }
//     else {
//         console.log('wtf')
//     };

                //NESTING
// let password ='129 04';
// if(password.length >= 6){
//  if (password.indexOf[' '] !== -1) {
//      console.log("Valid Password");
// }
//  else {
//  console.log("Password is long enough ,but cannot contain spaces")}
// }
// else{
//     console.log("Password must be longer");
// }
let password = 'chickenGAl';
if(password.length>= 8 && password.indexOf(' ')===-1){
    console.log('VALID PASSWORD');
}
else {
    console.log(('INVALID PASSWORD'));
}