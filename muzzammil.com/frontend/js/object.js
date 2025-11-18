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

//8
const rectangle = {
    width: 20, //properties
    height: 10, //propserties
    area: function() { //this is called method
        return this.width * this.height;
    }
};

console.log(rectangle.area());

//9
const account = {
    balance: 1000,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }   
};

account.deposit(500);
account.withdraw(300);
account.withdraw(1500);


//10
const movie = {
    title: "Inception",
    rating: [4,6,5,5,3,4,7,5,6,3],
    averageRating: function() {
        const sum = this.rating.reduce((total, rating) =>total + rating, 0);
        return (sum / this.rating.length).toFixed(2);
    }
};

console.log(`Average Rating ${movie.title}: ${movie.averageRating()}`);