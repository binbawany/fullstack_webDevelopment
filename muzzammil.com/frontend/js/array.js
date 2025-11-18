//array is an object to store data collections in a single variable
let fruits = ["apple", "banana", "mango", "orange"]; //element. indexing starts from 0
console.log(fruits);
console.log(fruits[0]); //accessing array element

fruits.unshift("banana"); //adds new element at the start of array


let myarray = [""];
let mynewarray = new Array("corolla", "civic", "liana", "A7");

console.log(mynewarray[2]);

mynewarray[2] = "S class"; //modifying array element

console.log(mynewarray);

//array methods:
console.log(mynewarray.length); //length of array

let mynewarray2 = mynewarray.toString(); //array to string
console.log(mynewarray2, typeof mynewarray2);


console.log(mynewarray.at(3)); //accessing array element using at() method

//document.getElementById("demo").innerHTML = fruits.join(" * "); //join() method

mynewarray.pop(); //removes last element from array
console.log(mynewarray);

mynewarray.push("A8"); //adds new element at the end of array
console.log(mynewarray);

mynewarray.shift(); //removes first element from array
console.log(mynewarray);

mynewarray.unshift("Hilux"); //adds new element at the start of array
console.log(mynewarray);

mynewarray[mynewarray.length] = "Land Cruiser"; //adds new element at the end of array
console.log(mynewarray);

delete mynewarray[3];
console.log(mynewarray);

let mynumbers = [1,2,3,4,5,6,7,8,9,10];
let mynewnumbers = [11,12,13,14,15];
let mydigit = [31,32,33,34,35];

let allnumbers = mynewnumbers.concat(mynumbers, mydigit);
console.log(allnumbers);

//serch in array

console.log(fruits.indexOf("mango")); //returns index of element
console.log(fruits.lastIndexOf("banana")); //returns -1 if element not found
console.log(fruits.includes("kiwi")); //returns true if element found otherwise false


let finding = mynumbers.find(myfunc);
function myfunc(value, index, array){
    return index > 5;
};

console.log(finding); //returns first element that matches the condition

fruits.sort(); //sorts array in ascending order
console.log(fruits);

mynumbers.reverse(); //reverses array order
console.log(mynumbers);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()}); //randomly shuffles array elements
console.log(points);

points.sort(function(a, b){return a - b}); //sorts array in ascending order
console.log(points);

points.sort(function(a, b){return b - a}); //sorts array in descending order
console.log(points);


//22 tasks
//array each element in object form name and marks
//condition

const students = [
    {name: "Ali", marks: 80},
    {name: "Ahmed", marks: 90},
    {name: "Aisha", marks: 70},
    {name: "Hina", marks: 85},
    {name: "Zainab", marks: 95}
];

for (let stu of students){
    if (stu.marks > 80) {
        console.log(stu.name);
    }
}

//26 tasks
//we have an array with duplicates
//we have to create new array without duplicates and without using set

let numbers = [1,2,3,4,5,1,2,3,4,5,6,7,8,9,10];
let newnumbers = [];

for (let num of numbers){
    if (!newnumbers.includes(num)){
        newnumbers.push(num);
    }
}

console.log(newnumbers);

//30th task
//array of random numbers
//only print the numbers which are divisible by 3

const rnumbers = [];
for (let i=0; i<20; i++){
    rnumbers.push(Math.floor(Math.random() * 100));
}

console.log(rnumbers);

const d3num = [];

for (let rnum of rnumbers){
    if (rnum % 3 === 0){
        d3num.push(rnum);
    }
}  

console.log(d3num);
