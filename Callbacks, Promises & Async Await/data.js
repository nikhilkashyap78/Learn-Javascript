// Sync in js : 
// Sync code is executed in sequence - one after another

console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');

// Async in js : 
// Async code is executed in parallel - together
  
function hello() {
    console.log('Hello');
}

setTimeout(hello, 3000); //timeout is 3 seconds

////////////////////////////////////////////////////////////

setTimeout(() => {            //other way to write function(arrow fun)
    console.log('World');     //setTimeout(() => {}, 5000)
}, 5000)


setTimeout(() => {console.log('World')}, 5000)













