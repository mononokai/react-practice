const data = [
    {
        id: 1,
        title: 'The Lord of the Rings',
        publicationDate: '1954-07-29',
        author: 'J. R. R. Tolkien',
        genres: [
            'fantasy',
            'high-fantasy',
            'adventure',
            'fiction',
            'novels',
            'literature',
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: 'El señor de los anillos',
            chinese: '魔戒',
            french: 'Le Seigneur des anneaux',
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: 'The Cyberiad',
        publicationDate: '1965-01-01',
        author: 'Stanislaw Lem',
        genres: [
            'science fiction',
            'humor',
            'speculative fiction',
            'short stories',
            'fantasy',
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: 'Dune',
        publicationDate: '1965-01-01',
        author: 'Frank Herbert',
        genres: ['science fiction', 'novel', 'adventure'],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: '',
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: '1997-06-26',
        author: 'J. K. Rowling',
        genres: ['fantasy', 'adventure'],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: 'Harry Potter y la piedra filosofal',
            korean: '해리 포터와 마법사의 돌',
            bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
            portuguese: 'Harry Potter e a Pedra Filosofal',
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: 'A Game of Thrones',
        publicationDate: '1996-08-01',
        author: 'George R. R. Martin',
        genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: '왕좌의 게임',
            polish: 'Gra o tron',
            portuguese: 'A Guerra dos Tronos',
            spanish: 'Juego de tronos',
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}


// Destructuring

const book = getBook(1);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
title;
author;
pages;
publicationDate;
genres;
hasMovieAdaptation;

const [primaryGenre, secondaryGenre] = genres;
primaryGenre;
secondaryGenre;


// Rest/Spread Operator

// the rest operator will create an array with the "rest" of the values in the
// array or object
const [firstGenre, secondGenre, ...otherGenres] = genres;
console.log(firstGenre, secondGenre, otherGenres);

// the spread operator will take all of the values of the array and place them in
// a new array
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

// the spread operator works similarly with an object, but can be used to
// create new properties, but also to override existing property values
const updateBook = {
    ...book,
    // adding a new property
    movePublicationDate: '2001-12-19', 
    //  overwriting an existing property
    pages: 1210};
updateBook;


// Template Literals

// template literals allow you to create strings that hold JS expressions
const summary = `${title}, a ${pages} page long book, was written by ${author} and published in ${publicationDate.split("-")[0]}.`;
summary;


// Ternaries instead of if/else statements

// ternaries are operators that use three parts to decide a condition
// syntax: condition ? true return value : false return value
const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
pagesRange;
// because hasMovieAdaptation is a boolean, it is easy to use for a ternary
console.log(`${title} has ${pagesRange} pages. It has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`);

