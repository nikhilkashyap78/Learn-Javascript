//built in function to manipulate string

//str.toUpperCase()
//str.lowerCase()
//str.trim()

let str = " nikhil kap hyap abc"
console.log(str.toUpperCase())  //it doent change the orignal string, because string are emutable

console.log(str.trim())

//slice method
//slice(start,end) end is optional
let x = str.slice(1,3) //return part of string
console.log(x)

//concatinate, jion the string 
//str1.concat(str2)
let str1 = "sdffd"
let str2 = "eefef"
let y = str1.concat(str2)
console.log(y)

//Replace
//str.replace(searchVal, newVal)

let z = str.replace("nik","ooo")
console.log(z)













