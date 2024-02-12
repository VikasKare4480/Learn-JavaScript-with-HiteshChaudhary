

const mySym = Symbol('Key1');
const mouse = {

    company : 'HP',
    modle : "HTP-PRO",
    color : 'Red',
    weight : 10.09,
    price : 250,
    "full name" : "HP Model 10",
    [mySym] : "Key1"
}

console.log(mouse);

// Acces the elements of the object
console.log(mouse.color);
console.log(mouse["color"]);
console.log(mouse["full name"]);
console.log(mouse[mySym]);

mouse.color = "Black";
console.log(mouse.color);
// Object.freeze(mouse);

mouse.greeting = function() {

    console.log("This is greeting");
    return '';
}


mouse.greeting();

mouse.greetingTwo = function() {

    console.log(`Hello this is second greeting ${this.modle}`);
}

mouse.greetingTwo();

console.log();