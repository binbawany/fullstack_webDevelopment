//an object holding key value pair
//new Map

const car = new Map([
    ["brand", "Toyota"],
    ["model", "2025"],
    ["color", "black"],
    ["type", "sedan"],
    ["price", 50000]
]);

console.log(car);
console.log(car.size); //size of map

console.log(car.get("brand"));

car.set("price", 60000); //updates price
car.set("transmission", "automatic"); //adds new key value pair
console.log(car);

console.log(car.has("model")); //true
console.log(car.has("year")); //false

car.delete("color"); //deletes color from map
console.log(car);

//task #10

const arr = [["id", 1], ["name", "Sara"]];

const mymap = new Map(arr);
console.log(mymap);

console.log(mymap.get("name")); //Sara

//task #7

const resStudents = new Map([
    ["Muzammil", 100],
    ["Ali", 90],
    ["Aisha", 95],
    ["bawany", 67],
    ["Zainab", 45],
    ["Amna", 75]
]);

let topStudent = "";
let topScore = 0;

for (const [student, score] of resStudents) {
    if (score > topScore) {
        topScore = score;
        topStudent = student;
    }
}

console.log(`Top student is ${topStudent} with score ${topScore}`);


//task #8

const tens = [10,20,30,40];

const average = tens.reduce((sum, val) => sum + val, 0) / tens.length;

console.log(`Average is ${average}`);

let sum = 0;
for (const val of tens) {
    sum += val;
}

const avg = sum / tens.length;

console.log(`Average is ${avg}`);
