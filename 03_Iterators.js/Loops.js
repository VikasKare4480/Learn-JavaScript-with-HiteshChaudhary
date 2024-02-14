

const array = ["Vikas", "Ram", "Sham", 'Sanket', 'Laxman', 'Damini', 'Mandakini'];

const length = array.length;
console.log(length);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log(
    "VikasLaxmanKareVikasLaxmanKare"
);

for(const i in array) {

    console.log(array[i]);
}

console.log(
    "VikasLaxmanKareVikasLaxmanKare"
);

for(const element of array) {

    console.log(element);
}


console.log("This is forEach Method");
array.forEach( (element) => {

    const data = element;
    array.push(data);
    console.log(data);
    }
);

console.log(array);

for(let index = 1; index <= 20; index++) {

        
        if(index == 5) {
            continue;
            console.log("Now value is 5");
            break;
        }
        console.log(`value of i is ${index}`);
}