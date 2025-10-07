//year:2025
//month:10
//day:7
//hour:21
//minute:25
//seconds:30
//millisecond:500

let d = new Date();
console.log(d);

console.log(d.getDay()); //day of the week 0-6
console.log(d.getDate()); //1-31
console.log(d.getMonth()); //0-11
console.log(d.getFullYear()); //4 digit year
console.log(d.getUTCFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime()); //milliseconds since January 1, 1970

console.log(d.setDate(15)); //set date of the month 1-31
console.log(d.setMonth(5)); //set month 0-11
console.log(d.setFullYear(2023)); //set year 4 digit
console.log(d.setHours(10)); //set hours 0-23
console.log(d.setMinutes(30)); //set minutes 0-59
console.log(d.setSeconds(45)); //set seconds 0-59
console.log(d.setMilliseconds(200)); //set milliseconds 0-999