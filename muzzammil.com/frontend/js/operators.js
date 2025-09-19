// = assigning operator
let e = 10;

//arithematic operators + - * / **for exponent %modules ++ increment --decrement
let a = 2;
let z = (40 + 60) ** a % 10 //step will follow of BODMAS
console.log(z)

let firstName = "Muzammil";
let lastName = "Waris";
let fullname = firstName + " " + lastName + " " + 31; //caoncatenation
console.log(fullname)

for (let i = 0; i > 5 || i<0; i--) {
    console.log(i)
}
//logical operators && before and after must meet, || before or after, ! not 

//compariision operators two or more values ==, === value plus datatype, != not equal to
//!== not equal to datatype and value, >great <less, >= <=
let x = 7;
let y = 8;
x == 7; //integer
x == "7" //string

x === 7; true
x === "7"; false

x = y; //8
x += y; //x = x+y 16
x -= y; //0
x *=y; //64
x /= y //1
x **=y;//16 M
x %= y; //0

