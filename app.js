// Type conversion - bir turdagi ma'lumotni boshqa turdagi ma'lumotga o'tishi

// 1. String to Number 
let str = '123' // string
console.log(str) ;
console.log(Number(str));
console.log(+str);
console.log(Number('hii'));
// parseInt va parseFloat 
// parseInt - butun sonlar uchun 
console.log(parseInt('100px'));
// parseFloat - kasr sonlar uchun 
console.log(parseFloat('12.345rem'));
 
// Number to string 
let num = 123 // number 
console.log(string(num));
console.log(num.toString());
console.log(`${num}`); // template literals

// Boolean 
console.log(Boolean('string')); // true 
console.log(Boolean('  ')); // true 
console.log(Boolean(' ')); // false
console.log(Boolean(1)); // true 
console.log(Boolean(0)); // false
console.log(Boolean(-1)); // true 
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(1n)); // true 
console.log(Boolean([])); // true 
console.log(Boolean({})); // true 
let id = Symbol('id')
console.log(Boolean(id)); // true 
console.log((num )); // true 
