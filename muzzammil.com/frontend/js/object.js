//is a varaible that stores many variables
const car = {
    type:"sedan", 
    color: "black", 
    model: 2025
};
console.log(car);
console.log(car.type);
console.log(car.color);
console.log(car.model);


let student = {};

student.name = "Muzzammil";
student.age = 20;
student.isStudent = true;

let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;

console.log(student); //
console.log(student.name); //object name.object property
console.log(student.age);
console.log(student.isStudent);

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

//delete object property
delete person.age;
console.log(person);
console.log(person["firstName"]); //object name["object property"]

//object in function constructor
function newPerson(fname, lname, age, color, language){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.color = color;
    this.language = language;
};

let person1 = new newPerson("Ali", "Khan", 22, "white", "Urdu");
let person2 = new newPerson("Ahmed", "Raza", 25, "black", "English");
