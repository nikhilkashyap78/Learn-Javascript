//push() -Add
//change in exiting array

let foodItems = ["Apple", "Mango", "Orange"];

foodItems.push("banana","abc")

console.log(foodItems)

///////////////////////////////////////////////////////////
//pop() -delete 
//change in exiting array

deletedItem = foodItems.pop();
console.log(foodItems)
console.log(deletedItem) //print deleted item

///////////////////////////////////////////////////////////
//toString()
//create new string
console.log(foodItems.toString()); //create the new string from the array

////////////////////////////////////////////////////////////
//concat()
//create new array

let arr1 = ["a","d","ww","we"];
let arr2 = ["ds","sdf","df"];

let arr3 = arr1.concat(arr2);
console.log(arr3);

////////////////////////////////////////////////////////////////
//unshift() : add elelment in begnining
a = arr1.unshift("aaaa");
console.log(arr1)

//shift() : delete at start
b = arr1.shift();
console.log(arr1)

//////////////////////////////////////////////////////////////////

//slice() : returna piece of array
//slice(startIdx, endIdx)
//No change in orignal array

let car = ["bmw", "audi", "farari", "thar"];
console.log(car)

//console.log(car.slice(0,2));

//splice() : change orignal array (add, remove, replace)
//splice(startIdx, delCount, newElement....)
let no = [3,5,72,4,6];

ab =no.splice(0,3,43)
console.log(ab)
 
  