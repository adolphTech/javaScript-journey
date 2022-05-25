// create new array with elements that passe dtest

const nums =[34,35,67,54,109,102,32,9];

const odds = console.log(nums.filter(n  => n % 2 === 1));

const bigNums =console.log(nums.filter(n => n >50));

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
},
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction', 'short stories']
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    }
]

//ratings greater than 4.3

const  goodBooks =console.log(books.filter (b => b.rating >4.3));

//only fantasy books

const fantasy = console.log(books.filter (f =>f.genres == 'fantasy'))

// all books that are either short stories or essays:
const shortForm = books.filter(book => (
    book.genres.includes('short stories') || book.genres.includes('essays')
))

const query = " ";
const results = books.filter(book => (
    book.title.toLowerCase()
    const title =book.title.toLowerCase()
      return  title.includes(query.toLowerCase())
))