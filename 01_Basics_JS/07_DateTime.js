

const todaysDate = new Date();
console.log(todaysDate);
console.log(Date.now());
console.log(Date.parse("2024-02-12"));
console.log(Date.UTC(2024, 1, 12)); 
// Note: Months are zero-based, so 1 represents February


console.log(todaysDate.toString());
console.log(todaysDate.getTime());
console.log(todaysDate.valueOf());
console.log(todaysDate.getDay());
console.log(todaysDate.getDate());
console.log(todaysDate.getFullYear());
console.log(todaysDate.getUTCFullYear());
console.log(todaysDate.getMilliseconds());

console.log(todaysDate.getHours());
console.log(todaysDate.getMinutes());

console.log(typeof todaysDate.valueOf());







