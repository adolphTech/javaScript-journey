const movieReviews={
    Arrival :9.5,
    Alien :9,
    Amelie :8,
    'In Brudged':9,
    Amadeus :8,
    'Kill bill':10,
    'Little Miss Sunshine':8.5,
    Coraline :7.5
};

////////////////////////////////object.keys()  ///////////////////////////////
// console.log(Object.keys(movieReviews));

//////////////////////////  Object.values() ////////////////////////////////////
//console.log(Object.values(movieReviews));

// for (let movie of Object.keys(movieReviews)){
//     console.log(movie)
// }

let total =0;
for (let rate of Object.values(movieReviews)){
    total+=rate
}
let avgTotal=(total)/length.movieReviews
console.log(avgTotal);

//object.keys ()to access the keys
