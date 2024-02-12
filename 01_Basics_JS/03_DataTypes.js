
let companyName = "Google";
console.log(typeof companyName); // string

companyName = 'Coditas';
console.log(typeof companyName); // string

companyName =  `Microsoft`;
console.log(typeof companyName); // string 

let currentYear = 2024;
console.log(typeof currentYear); // number

currentYear = 2024n;
console.log(typeof currentYear); // bigint

const CGPA = 8.95;
console.log(typeof CGPA); // number

const dataFetched = false;
console.log(typeof dataFetched); // boolean

let holdNothing;
console.log(typeof holdNothing); // undefined 

let holdsNullData = null;
console.log(typeof holdsNullData); // object

let countryInfo = {

    name : 'India',
    phonoeCode : '+91',
    noOfStates : 29,
    president : 'Dropadi Murmu',
    primeMinister : 'Narendra Modi',
}

console.log(typeof countryInfo); // object