//Math object for mathematical tasks
console.log(Math.PI); //3.141592653589793 //can be used with creating first

console.log(Math.round(4.7)); //5 //rounds to nearest integer
console.log(Math.round(4.4)); //4

console.log(Math.ceil(4.4)); //5 //always rounds up
console.log(Math.floor(4.7)); //4 //always rounds down

console.log(Math.sqrt(16)); //4 //square root
console.log(Math.abs(-4.7)); //4.7 //absolute value

console.log(Math.trunc(4.7)); //4 //removes decimal part
console.log(Math.trunc(-4.7)); //-4

console.log(Math.pow(2, 3)); //8 //2^3 = 2*2*2 = 8

console.log(Math.min(0, 150, 30, 20, -8, -200)); //-200 //minimum value
console.log(Math.max(0, 150, 30, 20, -8, -200)); //150 //maximum value

console.log(Math.random()); //random number between 0 and 1

//random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); //1-10

//random number between 1 and 100
console.log(Math.floor(Math.random() * 100) + 1); //1-100

console.log(Math.sign(-4)); //-1 //returns -1 for negative numbers
console.log(Math.sign(4)); //1 //returns 1 for positive numbers
console.log(Math.sign(0)); //0 //returns 0 for zero

console.log(Math.log(11)); //2.3978952727983707 //natural logarithm of 11
console.log(Math.log2(8)); //3 //base 2 logarithm of 8
console.log(Math.log10(100)); //2 //base 10 logarithm of 100

console.log(Math.sin(10)); //-0.5440211108893698 //sine of 10 radians
console.log(Math.cos(10)); //-0.8390715290764524 //cosine of 10 radians
console.log(Math.tan(10)); //0.6483608274590866 //tangent of 10 radians

console.log(Math.asin(0.5)); //0.5235987755982989 //arcsine of 0.5 in radians
console.log(Math.acos(0.5)); //1.0471975511965979 //arccosine of 0.5 in radians
console.log(Math.atan(1)); //0.7853981633974483 //arctangent of 1 in radians

console.log(Math.sinh(1));