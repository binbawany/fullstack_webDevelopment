//number can be negative or positive
//number can be whole or decimal
//maximum number length can be 64 digits
//number can be infinity or -infinity
//number can be NaN(not a number)

let num1 = 123; //integer
let num2 = 12.56; //decimal/float
let num3 = -456; //negative number
let num4 = 1.2e3; //exponential notation (1.2 * 10^3)
let num5 = 0xFF; //hexadecimal (255 in decimal)
let num6 = 0b1010; //binary (10 in decimal)
let num7 = 0o12; //octal (10 in decimal)
let num8 = Infinity; //infinity
let num9 = -Infinity; //negative infinity
let num10 = NaN; //not a number

num1 = num1.toString(); //after we call our method, and methods are pre built functions
console.log(typeof num1); //every function has round bracket.
console.log(typeof 768);

console.log(num2.toExponential(5));


console.log(num2.toFixed(2));

console.log(num2.toPrecision(3));

console.log(num1.valueOf());

console.log(typeof Number(num1)); //"18" arguments and parameters

console.log(Number(new Date()));

console.log(parseInt("10 years"));

console.log(parseFloat("10 years"));

//Epsilon difference smallest floating ponit greater than 1 and 1

let x = Number.MIN_VALUE;
console.log(x);

//bigintiger
let z = 123456789123456;
let y = 123456789123456789n;

z = BigInt(z);
console.log(typeof y)


