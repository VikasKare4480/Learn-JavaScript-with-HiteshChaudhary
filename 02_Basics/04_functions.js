


// THis is normal function declaration
function addition(number1, number2) {
    
    console.log(number1 + number2);
    return;
}
console.log(addition(10, 20));

// This is Anonymous function
const subtraction = function(number1, number2) {

    console.log(number1 - number2);
    return;
}
console.log(subtraction(10, 20));


// THis is arrow function 

const multiplication = (number1, number2) => {

    console.log(number1 * number2);
}

multiplication(10, 20);

// for only single parameter

const printData = Data => console.log(Data);
printData("Vikas");

const userName = "Vikas Laxman Kare";

const getLoginMessage = (name) => {

    console.log(`${name} Just logged in`);
}
getLoginMessage(userName);

// How to handle the multiple inputs to the function 


// REST operator OR spread operator

const calculateCartPrice = (...prices) => {

    let cartValue = 0;
    for(const price of prices) {

        cartValue += price;
    }
    return cartValue; // returns the array
}
console.log(calculateCartPrice(120, 200,400));

// Passing the Object to function

function getObjectAsParameter(userData) {

    console.log(`Username is ${userData.userName} and cart price is ${userData.price}`);
}

const userCart = {

    userName : "VikasKare",
    price : 1200
}

getObjectAsParameter(userCart);

getObjectAsParameter({

    userName : "Sanket",
    price : 2400
})

