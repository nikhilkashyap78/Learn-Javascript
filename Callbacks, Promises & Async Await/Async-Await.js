// Asynch Await

// way to write asynchronous code that looks synchronous. 
// It is a way to write promises in a more readable way.

// asynch always returns a promise.
// await makes JavaScript wait until the promise settles and returns its result.

//Syntax: async function myFunc() { await promise; }

async function hellow() {
    console.log('Hello');
    
}

//////////////////////////////////////////////////////////

function api(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('API called');
        resolve(200);
        },2000)   
    });
}

async function myFunc() {
    await api(); //1st
    await api(); //2nd
    
}