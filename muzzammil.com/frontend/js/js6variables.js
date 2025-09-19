//let is for variable declaration and initialization
//const is for constant variable declaration and initialization
//var is old way of variable declaration and initialization. avoid using var

//Block scope new let const
//global scope var let const
//function scope var let const

{
    let a = 10; //block scope
    const b = 20;   //block scope
    //var c = 30; //global scope
    console.log(a);
    console.log(b);
    //console.log(c);
}

//a is not use her
//b is not use here
//c is use here
//console.log(c);

let z; //declare
x =10; //initialize
let y = 20; //declare and initialize

//variable let cannot be re-declared
//var can be re-declared

let x = 10; //deca
let xc = 20; //error
x = 20; //initialize

var ya = 10; //declare
var ya = 20; //re-declare no error

//Hoisting hoisted to the top
name = "john"; //initialize
var name; //declare

subject = "javascript"; //initialize
let subject; //error cannot access before initialization

const pi = 3.14; //it defines a constant reference to a value. not constant value

//cannot be redeclared
//cannot be reassign
let f = 40;
f = 50;

const g = 5.2789043;
g = 5.6973 //error



