

// IIFE to get the time as a first line when the excecution is started

// all falsy values are : 

// null , undefinded, 0, '', "" , false, NaN(Not a Number)

// all values other than this are truthy values considered by the javaScript


(() => { console.log(new Date());})();

(function() {
    
    console.log(new Date().getDate().toString());
})()
const data = ''; 

if(data) {

    console.log("'' is false");
}

const getData = () => {

    console.log("This is arrow function");
}
getData()
if(0) {

}else {
    console.log("0 is falsy value");
}




console.log(typeof getData);

if(getData) {

    console.log("getData is true");
}else {

    console.log("GetData is false");
}


const penDrive = {

    name : "HPUSB",
    model : "MODEL-1",
    bluetoothVersion : 3.2,
    spaceSize : 64,
    colour : "Black"
}

console.log(typeof penDrive); // object 

if(penDrive) {

    console.log("Pendrive object is truethy value");
}else {

    console.log("Pendrive(object) is falsy value");
}

const usersIDS = []; // truethy

if(usersIDS) {

    console.log("array are truthy values");
}

const dayCount = 2;

switch (dayCount) {
    case 1:
        console.log("Monday");        
        break;

    case 2:
        console.log("Tuesday");        
        break;

    case 3:
        console.log("Wednesday");        
        break;

    case 4:
        console.log("Thursday");        
        break;

    case 5:
        console.log("Friday");        
        break;

    case 6:
        console.log("Saturday");        
        break;

    case 7 :
        console.log("Sunday");
        break;

    default:
        console.log("Please enter the valid dayCount ");
        break;
}


if(dayCount == 1) {

    console.log('Monday');
}else if(dayCount == 2) {

    console.log('Tuesday');
}else if(dayCount == 3) {

    console.log("Wednesday");
}else {

    console.log("Please enter the valid dayCount ");
}