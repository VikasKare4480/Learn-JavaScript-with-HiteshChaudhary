

const country =  {

    name : 'India',
    code : '+91',
    statesCount : 29,
    primeMinister : 'Narendra Modi',
    president : 'Dropadi Murmu',
    getCountryInfo : function() {

        console.log(`Name of county ${this.name} with code ${this.code} primeMinister ${this.primeMinister}`);
        console.log(country.primeMinister);
    }
}

country.getCountryInfo();



function normalFunction() {

    const anime = "NinjaThodsa";
    console.log(this.anime); // undefined
    console.log(anime);
    console.log(this);
}

normalFunction();

const calculateAVG = (numbers) => {
    
    console.log(this);
}
calculateAVG() ;


// returning the objects with arrow functions

const getObjectData = (number1, number2) => ({citizenship : "Indian"});

console.log(getObjectData());

const getMoviewInfo = (movieName) => {

    return {
        title: "Joker",
        releaseYear: 2019,
        director: "Todd Phillips",
        mainActor: "Joaquin Phoenix",
        genres: ["Crime", "Drama", "Thriller"],
        rating: 8.4,
        summary: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      };      
}

const jockerMovie = getMoviewInfo();

console.log(jockerMovie);