//there 8 datatypes in javascript
//1. string
//2. number can be negative or positive. float is included in number
//3. bigint
//4. boolean. true or false. binary values 0,1, yes,no
//5. undefined
//6. null
//7. symbol
//8. object

let fullname = "muzzammil"; //string 
let age = 20; //number 
let price = 10.5; //float can be negative or positive
let bigNumber = 1234567890123456789012345678901234567890n; //bigint
let isStudent = true; //boolean 2 values
let address; //undefined
let city = null; //null
let id = Symbol("id"); //symbol
let person = {firstName: "john", lastName: "doe", age: 30}; //object key:value pairs

console.log(fullname);
console.log(age);
console.log(price);
console.log(bigNumber);
console.log(isStudent);
console.log(address);
console.log(city);
console.log(id);
console.log(person);

console.log(typeof fullname);
console.log(typeof age);
console.log(typeof price);
console.log(typeof bigNumber);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof city);
console.log(typeof id);
console.log(typeof person); 