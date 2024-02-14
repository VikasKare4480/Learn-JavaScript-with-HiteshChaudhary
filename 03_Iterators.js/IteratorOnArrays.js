


const kareFamily = ['Vikas', 'Sanket', 'Damini', 'Laxman', 'Mandakini'];
const vikasKare = {

    me : 'Vikas',
    father : 'Laxman',
    mother : 'Mandakini',
    brother : 'Sanket',
    sister : 'Damini',
    uncle : 'Parshuram',
    aunt : 'Sonali',
    cousin: 'Parth',
    cousin : 'atharva'
};
// for of 

for(const member of kareFamily) {

    console.log(member);
}


for (const key in vikasKare) {
    console.log(key, vikasKare[key]);
}

const userName = 'VikasKare';

for(const char of userName) {

    console.log(char);
}


const map = new Map();

map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('PAK', 'Pakistan');

console.log(map);

for(const country of map) {

    console.log(country);
}

console.log(map.entries());


console.log(map.size);

for(const [key, value] of map.entries()) {

    console.log(key, ":" , value);
}

const familyInfo = {

    me : 'Vikas',
    father : 'Laxman',
    mother : 'Mandakini',
    brother : 'Sanket',
    sister : 'Damini',
    uncle : 'Parshuram',
    aunt : 'Sonali',
    cousin: ['Parth', 'Atharv']
};

for (const key in familyInfo) {
   
    console.log(key , " ", familyInfo[key]);
}

const languagesWithAuthers = {
    JavaScript: 'Brendan Eich',
    Python: 'Guido van Rossum',
    Java: 'James Gosling',
    CSharp: 'Anders Hejlsberg',
    Ruby: 'Yukihiro Matsumoto',
    Go: 'Robert Griesemer, Rob Pike, and Ken Thompson',
    TypeScript: 'Anders Hejlsberg',
    Swift: 'Chris Lattner',
    Kotlin: 'JetBrains',
    Rust: 'Mozilla',
};

for (const key in languagesWithAuthers) {
   
    console.log(key, ' : ', languagesWithAuthers[key]);
}

console.log("End of Code");

console.log('-----------------------------------------');
for(const [key, value] of Object.entries(languagesWithAuthers)) {

    console.log(key, " ", value);
}

// forEach() 


const programmingLanguages = Object.keys(languagesWithAuthers);
console.log('-----------------------------------------');

programmingLanguages.forEach( 

    (item, index, array) => {

        console.log(item, index, array);
    }
)

// function printTableofTem(str) {

//     console.log(str.length);
// }

// programmingLanguages.forEach(printTableofTem);

const libraryBooks = [
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Fiction',
      reviews: [
        { username: 'user1', rating: 4, comment: 'Enjoyed the book!' },
        { username: 'user2', rating: 5, comment: 'A classic! Must read.' }
      ]
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      reviews: [
        { username: 'user3', rating: 5, comment: 'Beautifully written.' },
        { username: 'user4', rating: 4, comment: 'Powerful and thought-provoking.' }
      ]
    },
    {
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      author: 'Douglas Adams',
      genre: 'Science Fiction',
      reviews: [
        { username: 'user5', rating: 5, comment: 'Hilarious and absurd!' },
        { username: 'user6', rating: 4, comment: 'A wild ride through space.' }
      ]
    },
  ];


libraryBooks.forEach(

    (item, index, array)=> {

        console.log(item.reviews[0].username);
        console.log(item.reviews[1].username);

    }
)
  