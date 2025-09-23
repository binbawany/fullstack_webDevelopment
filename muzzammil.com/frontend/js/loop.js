//loop can execute a block of code a number of times until a certain condition is met
//for loop
//while loop
//do while loop
//for in loop
//for of loop

//for loop
for (let i = 0; i < 5; i++){
    console.log("The value of i is: " + i);
}

//while loop
let j = 0;
while (j < 5){                                                                                                                                                                                                                                                                                                                                                                                                                                  
    console.log("The value of j is: " + j);
    j++;
}

//do while loop
let k = 0;
do {
    console.log("The value of k is: " + k);
    k++;
} while (k < 5);

//for in loop                                                                                                                                                                           
const person = {fname:"John", lname:"Doe", age:25};
for (let x in person){
    console.log(x + ": " + person[x]);//square person[lname]
}   

//for of loop
const cars = ["BMW", "Volvo", "Mini"]; //global
for (let car of cars){
    console.log(car);
}
let len = cars.length;
let reply = "";

let r = 0;
while (r > len) {
   reply += cars[r] + " "; 
    r++;
}
console.log(reply);

for (let c = 0; c < len; c++){
    reply += cars[c] + " ";
} 

//x += y //x = x + y
console.log(reply);


//do while, runs at least once even if condition is false
let t = 0;
do {
    console.log("The value of t is: " + t);
    t++;
} while (t > 5);

//infinite loop
let m = 0; 
/*while (m < 5){
    console.log("The value of m is: " + m);
}*/

//break and continue. jumps out from loop and switches, continue jumps to next iteration

for (let n = 0; n < 10; n++){
    if (n == 4){ continue; } //skips 4
    if (n == 7){ break; } //stops at 7
    console.log("The value of n is: " + n);
}