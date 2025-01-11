//Callback function: A callback function is a function that is passed as an argument to another function,
// to be “called back” at a later time.
// A callback function can run after another function has finished.

function sum(a,b){
    console.log(a+b);
}


function calculate(a, b, callback) {
    callback(a, b);
}

calculate(1, 2, sum);