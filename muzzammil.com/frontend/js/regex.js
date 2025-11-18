//search patterens
//it is an object that contains various regex patterns for validation and searching
//patteren/modifiers
let paragraph = "The quick brown fox jumps over the lazy dog dolg. The quick blue hare jumps over the sleepy cat.";

// Pattern to search for the word "quick"
let regex1 = /quick/g; //golobaly match
let matches1 = paragraph.match(regex1);
console.log("Matches for 'quick':", matches1);

// Pattern to search for words that start with 'b' and end with 'n' 
let regex2 = /\bb\w*n\b/g;
let matches2 = paragraph.match(regex2);
console.log("Matches for words starting with 'b' and ending with 'n':", matches2);

//
let regex3 = /the/gi;
let matches3 = paragraph.match(regex3);
console.log("Case insensitive match for 'the':", matches3);

// Pattern to search for any three-letter word
let regex4 = /\b\w{3}\b/g;
let matches4 = paragraph.match(regex4);
console.log("Matches for three-letter words:", matches4);

// Pattern to search for words ending with 'y'
let regex5 = /\b\w*y\b/g;
let matches5 = paragraph.match(regex5);
console.log("Matches for words ending with 'y':", matches5);

// Pattern to search for whitespace characters
let regex6 = /\s/g;
let matches6 = paragraph.match(regex6);
console.log("Whitespace characters found:", matches6);

// Pattern to search for words with double letters
let regex7 = /\b\w*(\w)\1\w*\b/g;
let matches7 = paragraph.match(regex7);
console.log("Matches for words with double letters:", matches7);

// Pattern to search for words that contain 'o' followed by any character and then 'g'
let regex8 = /\b\w*o.g\w*\b/g;
let matches8 = paragraph.match(regex8);
console.log("Matches for words containing 'o' followed by any character and then 'g':", matches8);