

const name = 'Vikas'; 
const surname = 'Kare';
let fullName = name + surname;
console.log(fullName);

const repoCount = 33;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const dreamCar = "BMW";

console.log(dreamCar[0]); // "B"

console.log(dreamCar.__proto__);

const countryName = new String("India");
console.log(typeof countryName);

console.log(countryName.toUpperCase());
console.log(countryName.toLocaleLowerCase());
console.log(countryName.charAt(3)); // 

let reversed = '';
for(let index = countryName.length; index >=0; index--) {

    // console.log(countryName.charAt(index));
    reversed += countryName.charAt(index).toUpperCase();
}
console.log(reversed);
console.log("End of Code");

console.log(countryName.indexOf('I')); // 0
console.log(countryName.indexOf('D')); // -1 (Not found in string)
console.log(countryName.lastIndexOf('d')); // 2 (middle element)

const neighborCountry = "Pakistan";
console.log(neighborCountry.substring(0, 4));  //(Include, exclude)// "Paki"


console.log(neighborCountry.slice(4, neighborCountry.length)); // "stan"
// console.log(neighborCountry.slice(-neighborCountry.length,8));
console.log(neighborCountry.slice().split('').reverse().join(''));

let stringWithSpces = '   GazaIsOfIsrail    ';
console.log(stringWithSpces);
console.log(stringWithSpces.trimStart());
console.log(stringWithSpces.trimEnd());
const trimedString  = stringWithSpces.trim();
console.log(`trimedString : ${trimedString}`);
console.log(stringWithSpces.includes('Of')); // true
console.log(stringWithSpces.startsWith('Gaza')); // ture
console.log(stringWithSpces.endsWith('Gaza')); // false

const incomingURL = "   https://effective-barnacle%vikas%v777w7xxxvpcpqpp.github.dev/   ";

// let trimedURL = incomingURL.trim();
// console.log(trimedURL);

const finalURL = incomingURL.replace('%vikas%', '-').trim();
console.log(finalURL);

console.log(finalURL.split('-'));


const areEqualCaseSensitive = (str) => {


    return  str.toLowerCase() === str.toLowerCase();
}


console.log(areEqualCaseSensitive("vikas")); // false (VIKAS != vikas)

// console.log(&areEqualCaseSensitive);

// let myObject = { key: 'value' };
// let memoryLocation = &myObject; // This will throw an error in JavaScript, as it doesn't support the address-of operator
// console.log(memoryLocation);


const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"


const gamersName = new String('Shriman legend');
console.log(typeof gamersName); // object

// To convert the String object into the string primitive(.valueOf())
console.log(typeof gamersName.valueOf());  // string

const undefinedString = new String(undefined);
console.log(undefinedString);

const nullString = new String(null);
console.log(nullString);


// toString() -- into String

const naymarAge = 45;
console.log(typeof naymarAge);
const naymarAgeInString = naymarAge.toString();
console.log(typeof naymarAgeInString);

const newSymbol = Symbol('-');
console.log(newSymbol.toString()); // const undefinedString = new String(undefined);
console.log(String.fromCharCode(86, 105, 107, 97, 115));
// Expected output: "Vikas"