//filter method: create new array of elements that gives
//true for a condition/filter

//eg: all even elelment

let arr = [5, 37, 9, 7, 3, 2, 89, 5];

let newArr = arr.filter((val) => {
    
  return val % 2 === 0; //only true condition elen=ment will print
});

console.log(newArr)