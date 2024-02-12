
const personInfo = new Object();

console.log(personInfo);

personInfo.name = 'Vikas Kare';
personInfo.age = 22;
personInfo.email = 'bikas@gmail.com';

console.log(personInfo);

const tinderUser = {

    email : "Vikas@gmail.com",
    userName : {

        getUserNmae : {

            name : "VikasKare4480"
        }
    }
}

console.log(tinderUser);

const obj1 = {

    a : 'A',
    b : 'B'
}

console.log(obj1);

const obj2 = {

    c : 'C',
    d : 'D'
}

console.log(obj2);

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = {...obj1, ...obj2};
console.log(obj4);

const numbers = [12,12,23,234,354];
const names = ['Vikas', 'Kare', 'Java', 'Developer'];
const resultant = [...numbers, ...names];
console.log(resultant);

const users = [

    {
        id : 101,
        email : "abc@gmail.com"
    },
    {
        id : 101,
        email : "abc@gmail.com"
    },
    {
        id : 101,
        email : "abc@gmail.com"
    }
]

console.log(Object.keys(personInfo));
console.log(Object.values(personInfo));
console.log(Object.entries(personInfo));

console.log(personInfo.hasOwnProperty("name")); //true
console.log(personInfo.hasOwnProperty("surname"));

const table = {

    name : "Products",
    totalEntries : 100,
    isPrimaryKey : true
}


// this is destructuring of the objects and also posible with arrays
const {name : tableName} = table;
console.log(tableName);

const {totalEntries : totalEntries} = table;
console.log(totalEntries);

const pets = ['Dog', 'Cat', 'Paret', 'Monkey'];

const [pet1] = pets;
console.log(pet1);