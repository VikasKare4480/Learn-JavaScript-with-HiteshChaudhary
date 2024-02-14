

// Nullish Coelescing Operator

// all the values which are null or undefinde are replaced with the given values

let data; // undefined 

data = 10 ?? 20;  // data = 10
// (if data is not null assign with 10 else assign with 20)

console.log(data);

let userName = null;

userName = "defaultValue" ?? "RahulShendage";

console.log(userName);

let weight = undefined;

weight = undefined ?? 50; // all values of 

console.log(weight);

let userId;
let userEmail;

userId = (null || undefined) ?? 101;
console.log(userId);

userEmail = (null || undefined) ?? "vikas.kare@dealermatix.com";
console.log(userEmail);


let watchTime;

watchTime = null ?? undefined ?? 102;
console.log("watchTime : is " +  watchTime , "minutes"); // 102 minutes

// ternary oprerator

let userRestrationDate = "2024-02-14";

let height = 65;

height > 60 ? console.log('Height is greater than 60') : console.log("Height is less than 60");;

false ? console.log(true) : console.log(false);

if(height < 50) console.log('This is true')
,console.log('This is also true');