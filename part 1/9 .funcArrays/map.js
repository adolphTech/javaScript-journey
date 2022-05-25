// createa a new  array from a call back

const text = ['lol','rofl','omg','ttyl'];
const caps = text.map(function (t){
    console.log(t.toUpperCase());
})
//////////////////////////////////////////////////////////////////////////////
const numbers =[20,21,22,23,24,25,26,27];
const doubles = numbers.map(function (num){
    console.log(num*2) //return
})

const numDetail= numbers.map(function (n){
    return {
        value :n,
        isEven :n % 2 ===0
    }
})
/////////////////////////////////////////////////////////////////////////

const words=['asap','byob','rsvp','diy'];
const abbreavs = words.map(function (word){
   console.log( word.toUpperCase().split("").join("."))
})