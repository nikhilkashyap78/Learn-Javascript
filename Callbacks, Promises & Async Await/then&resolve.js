//Then and resolve
//The then() method returns a Promise. It takes two arguments, a callback for success and another for failure.
//The resolve() method returns a Promise object that is resolved with a given value.
//Syntax: promise.then(onFulfilled, onRejected);


function asynchFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data1');
        }, 3000);
    });
}

function asynchFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data2');
        }, 3000);
    });
}

console.log('fetching data1');

//Promise chaining

asynchFunction1().then((data) => {
    console.log('fetching data2');
    asynchFunction2().then((data) => {
        console.log('data2 fetched:', data);
    });
});
