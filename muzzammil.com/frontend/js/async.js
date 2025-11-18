//javascript is a singal thread language
//it means it can do one thing at a time
//asynchronous programming is a way to handle long running tasks
//without blocking the main thread
//Asyncronous programming has Events, Callbacks, Promises, Async/Await


//callback function is a function passed into another function as an argument
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling back when done
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Muzammil", sayBye);


//
