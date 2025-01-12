//CallBackHell: 
//Callback hell is a phenomenon that afflicts a JavaScript developer when they try to execute multiple asynchronous operations one after the other.
// Callback hell is the result of heavily nested callbacks that make the code difficult to read and understand.
// 

 function getData(empId, getNextData) {
    setTimeout(()=> {
        console.log("data", empId);

        if(getNextData){
            getNextData();  
        }
    },2000);
 };

 //callback hell: nested callbacks
 getData(1, () => {
    getData(2,()=>{
        getData(3,()=>{    
        });
    });   
 });
