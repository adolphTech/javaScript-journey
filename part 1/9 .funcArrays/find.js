// returns value of first element in the array that satisfies the providedtesting functio
//only returns one

let movies =[
    "The Fantastic Mr.Fox",
    "Mr. and Mrs Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

const movie= movies.find(movies => {
 return movie.includes('Mrs');
})

const movie2 = movies.find(m => {
    m.indexOf("Mrs")
})