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




