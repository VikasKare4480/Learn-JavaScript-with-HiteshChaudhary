

// forEach() 
const langs  = ['Java', 'CPP', 'JavaScript', 'Ruby on Rails' ];

// console.log(langs);

const allLangs = langs.forEach(element => {

   console.log(element);
});

console.log(allLangs);


// filter() 


const langsWithLengthFive  = langs.filter(
    (element) => element.length > 5
);

console.log(langsWithLengthFive);

let numbersArray = [];

for (let i = 1; i <= 100; i++) {
  numbersArray.push(i);
}
console.log(numbersArray);

function  isPrime(number) {

    let counter = 0;
    for(let i = 1; i <= number; i++) {

        if(number % i == 0) {
                
            counter++;
        }
    }
    return counter === 2;
}

const primeNumbers = numbersArray.filter(
    (element) => {
        
        return isPrime(element);
    }
)

console.log(primeNumbers);

const oddElements  = [];

const oddNumbers = numbersArray.forEach(element => {
    
    if(element % 2 != 0) {

        oddElements.push(element);
    }
});

console.log(oddElements);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];



const FictionBooks = books.filter(
    (book) => {
        return book.genre === 'History';
    }
);

console.log(FictionBooks);

const publishedAfter2000 = books.filter(
    (book) => {

        return book.publish >= 1995 && book.genre === 'History';
    }
);

console.log(publishedAfter2000);



