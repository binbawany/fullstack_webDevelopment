//Function are fundamental building blocks in JavaScript. 
//A function is a set of statements that performs a task or calculates a value.
//A better code organizer
//Reusability of code
//Easier to test and maintain
//function must be declered before it is used in somewhare else
//function call or function invoke

//Function Declaration
function welcome(name, age) {
    console.log("Hello, " + name + "!" + age);
}
//function call or function invoke
welcome("Muzzammil", 20);
welcome("Ali", 22);
welcome("Ahmed", 25);

//Function Expression
let welcomeMessage = function(name, age) {
    console.log("Hello, " + name + "!" + age);
}
welcomeMessage("Hassan", 21);
welcomeMessage("Hussain", 23);
welcomeMessage("Hamza", 26);

//Arrow Function
let myFunction = function(a ,b) {return a * b;}
console.log(myFunction(4, 3));

let myarrowFunction = (a, b) => a * b;
console.log(myarrowFunction(5, 6));

//parameters when we declared
//arguments when we call the function

