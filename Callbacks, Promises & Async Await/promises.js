//Promises 
//Promises are a way to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations 
// where callbacks can create callback hell leading to unmanageable code.

//Promises is for "eventual completion" of an asynchronous operation, and its resulting value.
//Solution to callback hell
                                //function with 2 handeler resolve and reject
//Syntax: let promise = new Promise((resolve, reject) => {...});

let promise = new Promise((resolve, reject) => {
    console.log('Promise started');
    resolve(123);
    reject("error")
});



