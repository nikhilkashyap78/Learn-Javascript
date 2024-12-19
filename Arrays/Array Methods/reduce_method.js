//reduce method
//peform some operation & reduce array to a single value.
//If returns that single value.

let arr = [4,6,6,2,7]

const a = arr.reduce((res, curr) => { 
    //res=previous/result, curr=current

    return res+curr;
});

console.log(a)

const large = arr.reduce((res, curr) => { 

    return res > curr ? res : curr; //Ternary Operator
});

console.log(large)