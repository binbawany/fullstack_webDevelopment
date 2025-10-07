// we use in string double quotes "" or single quotes '' or backticks ``
let name = " Muzammil "; //01234567
let sname = 'Waris'; // 01234
let number = `256`; //012

console.log(name.length); //it is method

//escape charactors
let sentence = "we are pakistanis \n but live in CANADA \uD800"; //escape charactor
console.log(sentence)
//\b //backspace
//\f //form feed
//\n //new line
//\r //return
//\t //horizental tabulator
//\v //vertical tabulator

//string method

//Extract 
let char = sname.charAt(5);
console.log(char);

let charr = sname.charCodeAt(5);
console.log(charr); 

//at()
//codepointAt()
//name[4];

let country = "Pakistan";
let future = "Win";
//concatenate
let sdf = country.concat(" ", "will", " ", future);
console.log(sdf);

console.log(sdf.slice(-8));
console.log(sdf.substring(8));
console.log(name.toUpperCase());
console.log(sname.toLowerCase());


console.log(sentence.isWellFormed());
console.log(name.trimEnd());

let num = "5";
let padded = num.padEnd(2, "0");
console.log(padded);
console.log(num.repeat(4));

//searching
console.log(sdf.lastIndexOf());
console.log(sdf.indexOf("will")); //less powerful
console.log(sdf.search("will")); //powerful

console.log(sdf.match("ill"));
console.log(sdf.matchAll("will"));

console.log(sdf.includes("will"));
console.log(sdf.includes("willl"));

console.log(sdf.startsWith("will"));
console.log(sdf.startsWith("Pakistan"));

console.log(sdf.endsWith("will"));
console.log(sdf.endsWith("Win"));







