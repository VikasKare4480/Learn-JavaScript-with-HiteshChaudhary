let numbersArray = [];

for (let i = 1; i <= 10; i++) {
  numbersArray.push(i);
}
console.log(numbersArray);

const newNumbers = numbersArray.map(
    (element) => {
        return element + 10;
    }
);

console.log(newNumbers);

const addTwenty = []

const newNumbersTwenty = numbersArray.forEach(
    (element) => {
        addTwenty.push(element + 20);
    }
);

// newNumbersTwenty(); is not a function

console.log(addTwenty);

const numbersArray_ = [1, 2, 3, 4,  5, 6, 7, 8, 9, 10];

const newNumbersArray = numbersArray_.map((element) => element * 10).map((element) => element + 1).filter((element) => element > 50);
console.log(newNumbersArray);

const array1 = [1, 2, 3, 4,  5, 6, 7, 8, 9, 10];

let initialValue = 100;
const sumOfArrayElements = array1.reduce(
    (accumlator, currentElement) => {

        console.log(accumlator + currentElement);
        return accumlator + currentElement;
    }, initialValue // by default value is 0 because it is undefined in reduce function
);
console.log(sumOfArrayElements);

const array2 = [11, 22, 33, 44,  55, 66]; // 

let initialValue2 = 0;
const sumOfArrayElements2 = array2.reduce(

    function(acc, currValue) {

        return acc + currValue;
    }
);

console.log(sumOfArrayElements2);

const products = [
    {
      name: "Headphones",
      price: 49.99,
      brand: "Sony",
    },
    {
      name: "Laptop",
      price: 799.99,
      brand: "Dell",
    },
    {
      name: "Smartwatch",
      price: 249.99,
      brand: "Fitbit",
    },
  ];
  

const getCartPrice = products.reduce(
    (sum , currentElement) => sum + currentElement.price, 0
);

console.log(`getCartPrice ${getCartPrice}`);