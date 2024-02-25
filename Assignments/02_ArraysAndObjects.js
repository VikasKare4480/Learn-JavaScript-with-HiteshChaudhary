
// ### Arrays:

// 1. Create an array `numbers` with values 1 to 5, add 6, remove the first element, and print the final array.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
numbers.shift(); 
console.log(numbers);

// 2. Given an array, filter out even numbers, create a new array, and print it.

let numbersArr = [1, 2, 3, 4, 5];
let evenElements = [];
numbersArr.forEach(
    (element) => {
        if(element % 2 == 0) {
            evenElements.push(element);
        }
    }
);

console.log(evenElements);

// 3. Given an array of names, create a new array with name lengths and print it.

const names = ['Vikas', 'Laxman', 'Mandakini', 'Sanket', 'Damini'];

let lengths = [];

names.forEach(
    (name) => {

        lengths.push(name.length);
    }
) 

console.log(lengths);

// 4. Create an array, use `reduce` to find the sum, and print the result.

const ages = [10, 20, 30, 40];

const sumOfAges = ages.reduce(
    (sum , element) => {

        // console.log(sum);
        // console.log(element);
        return sum += element;
    }, 0
);
console.log(sumOfAges);
// 5. Given an array of strings, sort them alphabetically and print the sorted array.

let nations = ['India', 'China', 'United States Of America', 'Russia', 'France', 'United Kingdom'];

console.log(nations);
nations.sort();
console.log(nations);
// ### Objects:

// 6. Create a `person` object with `name`, `age`, and `city`. Assign values and print the object.

const person = {
    name : 'Barack Obama',
    age : 61,
    city : 'New York',
}

console.log(person);
console.log(`Barak obama : ${person}`);

// 7. Add an `occupation` property, update `age`, and print the modified `person` object.

console.log(`Updated Person Object`);
person.occupation = 'Politician';
console.log(person);
person.age = 62;
console.log(person);

// 8. Create a `car` object with `model`, `year`, and a nested `engine`. Print the `car` object.

const car = {
    model : 'BMW Series 7',
    year : 2024,
    engine : {

        type : 'Four strock',
        cc : 1200,
    }
}
// console.log(car);

// console.log(car.engine.type);
// console.log(car.engine.cc);

// 9. Iterate over an object's properties and print them.


for(const [key, value] of Object.entries(car)){

    if(typeof value === 'object') {

        for(const [innerKey, innerValue] of Object.entries(value)) {

            console.log(`${innerKey} : ${value[innerKey]}`);
        }
    }else {

        console.log(`${key} : ${car[key]}`);
    }
}

// 10. Create two objects, write a function to compare their equality, and test it.

// Create two objects
const person1 = {
    name: 'John',
    age: 25,
    city: 'New York'
  };
  
  const person2 = {
    name: 'John',
    age: 25,
    city: 'New York'
  };
  
  // Function to compare object equality
  function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
  
  // Test the function
  console.log(areObjectsEqual(person1, person2)); // Output: true
  
  // Modify one property in person2
  person2.city = 'San Francisco';
  
  // Test again after modification
  console.log(areObjectsEqual(person1, person2)); // Output: false
  
const BRICSNationsObj = {
    Brazil: true,
    Russia: true,
    India: true,
    China: true,
    'South Africa': true
  };
  
  const UNPermanentsObj = {
    'United States Of America': true,
    China: true,
    France: true,
    'United Kingdom': true,
    Russia: true
  };
  
const areObjectsEqual = function(object1, object2) {

    const key1 = Object.entries(object1);
    const key2 = Object.entries(object2);

    // Only compares the no of properties in the objects
    if(key1.length !== key2.length) {

        return false;
    }

    // Compare the actual values of the Both Objects 
    
    for(const key of key1) {

        if(object1[key] != object2[key]) {

            return false;
        }
    }
    return true;
}

console.log(areObjectsEqual(BRICSNationsObj, UNPermanentsObj));