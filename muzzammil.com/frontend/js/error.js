//4 types
//1. Syntax Error
//2. Runtime Error / Reference error
//3. Logical Error
//4. Compilation Error

//Syntax Error
console.log("Hello World");

//runtime error()
//console.log(undeclaredVariable);

//logical error
let a = 10;
let b = 0;
let sum = a / b; //should be a + b
console.log("Sum is: " + sum);
//costomized error catch
try {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
} catch (error) {
    console.log("An error occurred: " + error.message);
}

//compilation error
let num = 10
console.log(num);

// try catch
try {
    console.log(undeclaredVar);
} 
catch (error) {
    console.log("An error occurred: " + error.message);

}


try {
    console.log("Trying to execute code");
} catch (error) {
    console.log("Caught an error: " + error.message);
}


