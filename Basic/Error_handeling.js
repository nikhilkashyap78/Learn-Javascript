// Error Handling : try, catch, finally

// try {
//     ...normal code...

// }catch(error){                //err is error object
//     ...error handling code...
// }

let a = 10;
let b = 30;

console.log(a+b);
console.log(a+b);
console.log(a+b);

try {
    console.log(a+c); //c is not defined, error will be thrown
}
catch(err){
    console.log("Error = ", err);
}

console.log(a+c);
console.log(a+b);
console.log(a+b);
console.log(a+b);