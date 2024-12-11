//Function have ()- we provide input
//Block of code

// function functionName(){
//     //do some work
// }

// functionName(praam1, param2...){
//     //do some work
// }

/////////////////////////////////////////////////////////////////

function myFunction() {
  //define function

  console.log("nikhil");
  console.log("kashyap");
}

myFunction(); //call the function

/////////////////////////////////////////////////////////
//NaN = not a number

function myFun(msg) {
  //parameter -> input

  console.log(msg);
}

myFun("nik"); //argument

//////////////////////////////////////////////////

//2 no. sum
function sum(a, b) {
  console.log(a + b);
}
//sum(4,5) //take as input

//////////////////////////////////////////////////

function sum(a, b) {
  //function variabe have block scope

  let s = a + b; //local variable

  return s; //return this to where it get call,
  //nothing get executed after the return
}
let val = sum(4, 5); //take as input
console.log(val);

////////////////////////////////////////////////
