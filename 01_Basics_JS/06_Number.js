
const age = 22;
console.log(typeof age); // number

// form primitive to object
const ageObject = new Number(age);
console.log(typeof ageObject); // object


// form object to primitive

console.log(ageObject.valueOf()); // 22
console.log(typeof ageObject.valueOf()); // number

console.log(Number("Vikas")); // NaN
console.log(Number(null)); // 0
console.log(Number("")); // 0
console.log(Number(undefined)); // NaN
console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(typeof Number("123123")); // number 123123

// Static Properties

console.log(Number.EPCILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);


// static methods

console.log(Number.isInteger(123)); // true
console.log(Number.isFinite(234234)); // true
console.log(Number.isNaN('okkkk')); // true
console.log(Number.parseInt("123")); // 123
console.log(Number.parseFloat("123.123")); 123.123

const ZIPCode = '434343';

console.log(ZIPCode.constructor);

console.log(typeof ZIPCode.valueOf());

const numObj = new Number(42);
console.log(typeof numObj);
console.log(numObj.toString()); // "42"


