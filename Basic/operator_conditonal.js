//operator in JS
// Arithmetic Operator
 

let a =5; b = 5;
// console.log("sum = ",a+b)

// console.log("a exponentiation b",a ** b); //exponentiation(a^b)

// Uniary Operator

console.log("Increment",++a); //preinc
console.log("Dicrement",--b); //predic


//Assignment Operator
let n = 3 ; m = 5;

n -= 1; //this is semilar to n=n-1
m += 2;

console.log("n = ",n, "m = ",m);


//Compasion Operator

// Equla ==,
//Equal to & type ===, strickly check
//Not equal to !=;
//Not equal to & type !==

let e = 3, f = 4;

console.log(e == f);
console.log(e < f);


//Logical operator
// AND &&
// OR ||
// NOT !

let cond1 = e > f;
let cond2 = e < f;

console.log("cond1 && cond2",cond1 || cond2);

console.log("e<f ",!(e<f)); //this make it negation 

//////////////////////////////////////////////////////////////


//Ternary Operator
// only operator that take 3 operant

//condition ? true output : false output;

age = 18;

let result = age < 23 ? "adult" : "senior";

console.log(result);