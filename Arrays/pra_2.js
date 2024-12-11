let arr = [250, 645, 300, 900, 50];
// let a = 0
// for(let i=0; i<arr.length; i++){
//    a += arr[i]
// }
// console.log(a)

///////////////////////////////////////////////////////////
//uSING FOR OF LOOP

let x = 0;
let y = 0;
for (let value of arr) {
  y += arr[x];
  x++;
}
console.log(y);
