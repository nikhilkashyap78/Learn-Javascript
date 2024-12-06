let marks = [43,23,54,76,34,23,4,6];
let sum = 0;

for(let val of marks){
    sum += val;
}
let avg=sum/marks.length;

console.log("sum = ",sum);
console.log(`avg = ${avg}`);