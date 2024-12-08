let itm = [23,4,2,5,23,21];

let idx=0;
for (let val of itm){   //val contain the value of itm at index

    console.log(`value at index ${idx} = ${val}`);

    //give the 10% of each value 
    let offer = val/10;

    itm[idx] = itm[idx]-offer;

    //we print the itm[idx] not the val because its the part of loop
    console.log(`ater offer price = ${itm[idx]}`);
    idx++;
} 


//////////////////////for loop/////////////////////////

