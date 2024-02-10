
const personsName = "Vikas";
console.log("Name : ", personsName);

const personsSurname = "Kare";
console.log('Surname : ' + personsSurname);

const age = 22;

console.log("Age : ", age);

const bloodGroup = "O+";
console.log("BloodGroup : ", bloodGroup);

// age = 23; // can't assign to the cosnt variable  == TypeError

console.table([personsName, personsSurname, age, bloodGroup]);
console.log ('This is simple log file');

if(age >= 10) {

    console.log("Your age eligible to vote");
}else {

    console.log("Not eligible to vote");
}

// for(let i = 0; i <= 20; i++) {

//     console.log(i);
// }


let data = "Numbers : ";
for (let index = 0; index < 10; index++) {

    data += `${index} `; // This is concatenation to the original string at every iteration 
}

console.log(data);
