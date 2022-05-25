const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
    console.log(num)
});

function printTriple(n) {
    console.log(n * 3)
}

numbers.forEach(printTriple)

///////////////////////getting  parameter and index////////////////
numbers.forEach(function (num,idx){
    console.log(idx,num)
})
////////////////////////////////////////////////////////////////////////////////

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchet', 'Neil Gaiman'],
    rating: 4.25
},
    {
        title: 'Bone :The complete Edition',
        author: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: "American Gods",
        author: ["Neil Gaiman"],
        rating: 4.11
    },
    {
        title: "A Gentleman in Moscow",
        author: ['Amor Towles'],
        rating: 4.36
    }
]

books.forEach(function (book){
   console.log(book.title.toUpperCase())
})

/////book is used to represent each single object in the array ////////////////
////////////////////////////////OTHER VERSIONS //////////////////////
for(let book of books){
    console.log(book.title.toUpperCase())
}

//////////////////////////////////////////////////////////////

for (let i =0;i < books.length;i++){
    console.log(books[i].title.toUpperCase())
}