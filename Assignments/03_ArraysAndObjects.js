// ## Medium-Level JavaScript Assignment: Arrays & Objects (10 Questions)

// **Instructions:** Answer the following questions in JavaScript code, demonstrating your understanding of arrays and objects.

// **Note:** This assignment assumes a basic understanding of JavaScript syntax and functions.

// **1. Sum of Even Numbers:**

// Create a function `sumEvenNumbers(arr)` that takes an array of numbers and returns the sum of all even numbers in the array.

const sumOfEvenNumbers = (numbers) => {

    let sumOfEven = 0;
    numbers.forEach( (number) => {
        
        if(number % 2 == 0) {
            
            sumOfEven += number;
        }   
    });

    return sumOfEven;
}

const numbers = [2, 3, 4, 5, 6, 7, 8];

const sumOfEvens = sumOfEvenNumbers(numbers); 

console.log(`Sum of even numbers are : ${sumOfEvens}`);

// **2. Unique Characters:**

// Create a function `uniqueChars(str)` that takes a string and returns a new string containing only the unique characters (remove duplicates).

function uniqueChars(string) {

    let uniqueCount = 0;
    for(const outerChar of string) {

        console.log(outerChar);
        let charCount = 0;
        for(const innerChar of string) {

            if(outerChar === innerChar) {

                charCount++;
            }
        }

        if(charCount === 1) {
            
            uniqueCount++;
        }
    }  
    return uniqueCount;
}

const userName = 'Vikaskare';
console.log(userName.charAt(0));
let uniqueChars_ = uniqueChars(userName);
console.log(`Unique chracters are : ${uniqueChars_}`);

// **3. Object Merge:**

// Create a function `mergeObjects(obj1, obj2)` that takes two objects and returns a new object containing all properties from both objects, with properties from `obj2` overriding those with the same name in `obj1`.

function mergeObjects(obj1, obj2) {

    const mergedObject = {};

    for(const key in obj1) {

        if(obj1.hasOwnProperty(key)) {
            
            mergedObject[key] = obj1[key];
        }
    }

    for(const key in obj2) {

        if(obj2.hasOwnProperty(key)) {

            mergedObject[key] = obj2[key];
        }
    }

    return mergedObject;
}


const vikas = {

    name : 'Vikas',
    fatherName : 'Laxman',
    surname : 'Kare',
    profession  : 'Software Engineer',
    education : 'Bachelors Degree'
}

const sanket = {

    name : 'Sanket',
    fatherName  : 'Laxman',
    surname : 'Kare',
    amount : 12211221
}

const mergedObject = mergeObjects(vikas, sanket);

console.log(mergedObject);

console.log(`After merging two arrays : ${JSON.stringify(mergedObject)}`);

const mergedObjectString = JSON.stringify(mergedObject);

console.log(mergedObjectString);

// **4. Filter by Property:**

// Create a function `filterByProperty(arr, propName, value)` that takes an array of objects, a property name, and a value, and returns a new array containing only the objects from the original array where the specified property matches the given value.

// **5. Reverse Array:**

// Create a function `reverseArray(arr)` that takes an array and returns a new array with the elements in reverse order.

function reverseArray(array) {

    return array.reverse();
}
const reverseMe = [10, 20, 30, 40, 50];

const reveredArray = reverseArray(reverseMe);
console.log(``);

// **6. Flatten Array:**

// Create a function `flattenArray(arr)` that takes an array of nested arrays and returns a single-level array containing all elements.

const flatArray = [10, 20, ["Vikas", 'Laxman', " Kare"], [56.99]];
console.log(flatArray);
const newFlatArray = flatArray.flat();
console.log(flatArray);
// **7. Deep Copy Object:**

// Create a function `deepCopyObject(obj)` that takes an object and returns a new object that is a deep copy (copies all nested objects and arrays).

// **8. Count Palindromes:**

// Create a function `countPalindromes(arr)` that takes an array of strings and returns the number of palindromes (strings that read the same backward and forward) in the array.

// **9. Group Anagrams:**

// Create a function `groupAnagrams(arr)` that takes an array of strings and returns an object where each key is a sorted string (representing an anagram group) and the value is an array of strings belonging to that anagram group.

// **10. Student Grade Calculator:*
// Create an object `student` with properties: name, marks (object with subject names as keys and marks as values), and calculateGrade() method. The `calculateGrade()` method should return the letter grade (A, B, C, etc.) based on the average mark, considering a threshold for each grade.

// **Bonus:** Write unit tests for your functions using a testing framework like Jest.

// **Remember:** Use clear and concise code, add comments where necessary, and explain your approach if needed. Good luck!