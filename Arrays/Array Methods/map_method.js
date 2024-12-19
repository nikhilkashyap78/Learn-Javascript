//create new array with some result of operation 
//value its callback return are useďto from new array

//arr.map(callbackFnx(value, index, array))

let num = [4,6,2,5,8,3,2];

num.map((val) => {
    console.log(val)
})



a = num.map((val) => {
    return val*2
})
console.log(a)