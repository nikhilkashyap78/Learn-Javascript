//string are emutable


let str = "nik";
let str2 = 'nik';

console.log(str.length); //TO get th e length
console.log(str[2]); //Index og string

//Template Literals

let secialString = 'this is a template literals'

let obj = {
    nam: "nik",
    no: 23
}

//normal using comma
console.log("the name of stuednt is",obj.nam,"and the number is",obj.no);

//with template literals
let output = `the name of student is ${obj.nam} and the number is ${obj.no}`;
console.log(output);
// ${expression} called place-holder this called string interpolation

//scape character - count as single character

//for next line
console.log("nikhil\nkashyap")
//for Tab
console.log("nikhil\tkashyap") //
