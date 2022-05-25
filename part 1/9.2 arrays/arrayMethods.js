// push - add to the end
//pop - remove from end
//shift -remove from start
//unshift - add to start

//concat - merge arrays
// includes -look for a value
// indexOf - just like str.indexOf()
// join - create a string from an array
// reverse - reverses an array
// slice - copy portion of an array
// splice - remove/replace elements
// sort - sorts an array


let dishesToDo =['big platter'];
dishesToDo.unshift('large plate');
dishesToDo.push('cups');
dishesToDo.push('glass')
dishesToDo.unshift('nigga')
dishesToDo.push('wtf')

                      //CONCAT
let array1 = ['a','b','c'];
let array2 = ['d','e','f'];
let array3 = ['meat','rice','avocado'];
// console.log(array1.concat(array2,array3));
// console.log(array1.concat(array2));

               //INCLUDES        -returns true or false ,takes an array and tells you if the array contains the value or not
let ingredients = ['water','corn','flour','cheese','brown sugar','shrimp','butter'];
// console.log(ingredients.includes('fish'));
// console.log(ingredients.includes('shrimp'));

                //INDEX OF searches for a value and returns its index

// console.log(ingredients.indexOf('cheese'));
// console.log(ingredients.indexOf('fish')); //returns -1

                   //REVERSE
let letters = ['a','d','y','g'];

// console.log(letters.reverse())

                    // JOIN
// console.log(ingredients.join('-'));

                            //SLICE
let animals = ['shark','salmon','whale','bear','lizard','tortoise'];
let swimmers = animals.slice(0,2);
//console.log(swimmers);


                             //SPLICE
animals.splice(1,0,'octopus'); //insert after shark -- deleting none
//console.log(animals)
animals.splice(3,2);//starting from index 3 i want to delete 2 items.
console.log(animals);
//splice-- leccture resource