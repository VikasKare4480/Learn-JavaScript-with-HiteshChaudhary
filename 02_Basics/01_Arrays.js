
const countries = ["India", 'Pakistan', 'Bangaladesh', 'Nepal', 'Japan', 'China', 'Russia', 'Germany', 'UK', 'North Korea', 'Italy', 'Switzerland'];


// Properties 
console.log(countries.length);

// methods

const stringOfCounties = countries.join(' ');
console.log(stringOfCounties.split(' ')); // string (default , seperated)

// added at the end of the array and returns new length
console.log(countries.push('Bhutan'));  // same as append
console.log(countries);

console.log(countries.unshift("South Africa"));
console.log(countries); // added at the start of the array

// removes the last element from the array and returns the same 
console.log(countries.pop());  //  Bhutan removed
console.log(countries);

console.log(countries.shift()); // South Africa removed
console.log(countries);
 
console.log(countries.slice(1, 5)); // a new array new array 
console.log(countries.splice(1, 2, "Vikas", "Kare")); // return new array of removed elements from 
console.log(countries);

console.log(countries.splice(10, 2)); // removed next 2 elements from the 
console.log(countries);

console.log(countries.indexOf("UK")); // 8
console.log(countries.lastIndexOf('Nepal')); // 3
console.log(countries.includes('India')); // true

const BRICSCountries = ['BRAZIL', 'RUSSIA', 'INDIA', 'CHINA', 'SOUTH AFRICA']
console.log(countries.concat("Netherland", "Ukrain", BRICSCountries));
console.log(countries.length);
console.log(countries.join(' '));
console.log(countries.toString()); // default , separated 

// remove specific element from array

const pakistanIndex = countries.indexOf('China');
console.log(pakistanIndex);
console.log(countries.splice(pakistanIndex,1)); // china removed
console.log(countries);
