
 /*
 
    const --> mostly used type in Js to Declare the const values which cant be resigned 
              and needs to initialize during the declaration itself

              having Block Scope
              variables cant redeclare in same scope

*/

const petName = "Rocky";
const petBreed = "Vodafone";
const petAge = 12;
const petColour = "White";
console.table([petName, petBreed, petAge, petColour]);


/*

    let --> Introduced in the ECMA 6 in 2015 due to the global scoping of the var type 
            to overcome this we have let 

            let can be resigned and can be null 

            Having Block scope
            variable cant be redeclere with the same name

*/

let profession = "Software Engineer";
profession = "Civil Engineer";
console.log(profession); // Civil Engineer 

let city = "Pune";
console.log(city);

city = "Mumbai";
console.log(city);

let cgpa; // now its undefined (undefined are the types with having not a value yet but can be ressigned)
console.log(cgpa); // undefined

let thisHoldsNull = null; // null are holding some thing but now its null 
console.log(thisHoldsNull);
 

console.log(`type of null is ${typeof null}`); // object
console.log(`type of undefined is ${typeof undefined}`);  // undefined 