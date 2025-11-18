//collection of unique values
let mySet = new Set([54,67,45]);

mySet.add(1);
mySet.add(5);
mySet.add("some text");
let o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); //different object reference

console.log(mySet);
console.log(mySet.size); //size of set

console.log(mySet.has(5)); //true
console.log(mySet.has(7)); //false


let arr = "";

for (let item of mySet){
    arr += item + " ";
}

console.log(arr);

let arr2 = "";
mySet.forEach(function(value){
    arr2 += value + " ";
})

console.log(arr2);


mySet.delete(5); //deletes 5 from set
console.log(mySet);

mySet.clear(); //clears the set
console.log(mySet);

//convert set to array
let myArray = Array.from(new Set([1,2,3,4,5,1,2,3,4,5]));
console.log(myArray);

//convert array to set
let mySet2 = new Set([1,2,3,4,5,1,2,3,4,5]);
console.log(mySet2);

let ab = new Set(['a','b','c']);
let bc = new Set(['b','c','d']);

let union = ab.union(bc);
console.log(union);

let intersection = ab.intersection(bc);
console.log(intersection);

let difference = bc.difference(ab);
console.log(difference);

let symDifference = ab.symmetricDifference(bc);
console.log(symDifference);