//if block of code condition,true excute,
//else 
//else if multiple conditions
//nested if else
//switch case
//shorthand if else (ternary operator) condition ? true : false
a = 10;
b = 20;

if (a < b) {
    console.log("a is less than b");
    if (a + b == 50) {
        console.log("a + b is equal to 50");
    } else {
        console.log("a + b is not equal to 50");
    }
} else if (a == b){
    console.log("a is equal to b");
} else {
    console.log("a is greater than b");
}


/*switch(express) {
    case 1:
        console.log("this is case 1");
        break;
    case 2:
        console.log("this is case 2");
        break;
    case 3:
        console.log("this is case 3");
        break;
    default:
        console.log("this is default case");
}*/

//ternary operator
condition = (a < b) ? "a is less than b" : "a is greater than or equal to b";
console.log(condition);


let hour = 7;
if (hour < 8){
    greeting = "Good morning";
    console.log(greeting);
}

let age = 18;
let answer = "you can not drive";

if (age >= 18){
    answer = "you can drive";
} else {
    answer = "you can not drive";
}
console.log(answer);


//ontario, quebec, manitoba, saskatchewan, alberta, british columbia ontario 16 above, qubec above 14
let stuage = 17;
let province = "quebec";
let ticket = "ticket not issued";

if (province == "ontario"){
    if (stuage <= 18){
        ticket = "ticket issued";
    } else {
        ticket = "ticket not issued";
    }
} else if (province == "quebec"){
    if (stuage <= 16){
        ticket = "ticket issued";
    } else {
        ticket = "ticket not issued";
    }
}
console.log(ticket);

//ternary operator
let marks = 37;
let grades = (marks >= 80 ) ? "A+" :(marks < 80 && marks >= 70) ? "A" : (marks < 70 && marks >= 60) ? "B" : (marks < 60 && marks >= 50) ? "C" : "F";

console.log(grades);

//switch case, control flow, if else alternative
//getDay is a method  
switch (new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;
    default:
        day = "today";
}
console.log(`Today is ${day}`);



switch (new Date().getDay()){
    case 0:
    case 6:
        text = "Today is a weekend";
        break;
    case 1:
    case 2:
        text = "weekend is far away";
        break;
    case 3:
    case 4:
        text = "weekend is near";
        break;
    case 5:
        text = "Tomorrow is weekend";
        break;
    default:
        day = "you have no weekend";
}
console.log(text);