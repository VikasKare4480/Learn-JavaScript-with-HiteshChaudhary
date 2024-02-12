
const vikas = 'This is cosnt must be initialized';
console.log(vikas); 

const name = "VikasKare";
const email = "karevikas7777@gmail.com";

console.log(name ,email);

let id = Symbol('124');
console.log(id);

let anotherId = Symbol('123');
console.log(anotherId);

console.log(id === anotherId); // false

// Premitive data types 

// string , boolean, number , null , undefined, NaN, bigInt(n), Symbol

// Non primitives data types are : 

// array : 

const names = [
    "Vikas",
    "Laxman",
    "Kare"
]

console.log(names);
console.log(typeof names); // object

// objects

const personsInfo =  {

    name : "Vikas",
    surname : "Kare",
    age : 22
}

console.log(personsInfo);
console.log(typeof personsInfo);


function getUserInfo() {
    
    return personsInfo;
}
console.log(getUserInfo());
console.log(typeof getUserInfo); // function object

console.log("2" == 2); // true (it parses the "2" to 2 and then compares)
console.log("2" === 2); // false (checkes the types first and then comapares)

console.log(typeof "2" + 2); // 22
console.log(2 + "2"); // same 22

console.log(null >= undefined);
console.log(false == 0); // true
console.log(false === 0); // false
console.log(true == 1); // true
console.log(true === 1); // false

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Object); // function (Constructor of Object class)
console.log(typeof Symbol); // function (Constructor of Symbol class)
