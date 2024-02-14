

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

        if(index == 10) {
            continue;
        }
        
        if(index == 5) { 
            console.log("Now value is 5");
            break;
        }
        console.log(`value of i is ${index}`);
}

// While lOop 

let index = 1;

while(index <= 20) {

    console.log(`Value of index is ${index}`);
    index++;
}

const kareFamily = ['Vikas', 'Sanket', 'Damini', 'Laxman', 'Mandakini'];

console.log(kareFamily.length);

let member = 0;

while(member < kareFamily.length) {

    console.log(kareFamily[member]);
    member++;
}
console.log('-------------------------------');

member--;
do {
    console.log(kareFamily[member]);
    member--;
}while(member >= 0);