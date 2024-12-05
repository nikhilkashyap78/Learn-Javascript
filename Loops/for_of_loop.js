// Used for strings and arrays 
 
 let str = "nikhil";

// for(let i of str){ //iterator -> characters

//     console.log("i = ",i);
// }


let length = 0;

for(let value of str){
    console.log("value = ",value);
    length++;
}

console.log("string length = ",length);