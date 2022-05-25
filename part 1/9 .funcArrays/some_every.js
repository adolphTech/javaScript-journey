//test whether allelements in the array pass the provided function .It returns a boolean value
const words = ["dog","dig","log","bag","wag"];

const all3lets = words.every(word => word.length ===3 );
console.log(all3lets) //returns true


///some  ---at least one is true

const someStartWithD = words.some(word => word[0]==='d');
console.log(someStartWithD)