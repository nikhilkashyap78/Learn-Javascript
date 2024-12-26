//Event Handling 

//1. Inline handling
//2. Function throug handeling(JS)
//3. Event Listeners
////////////////////////////////////////////////////////////////

//2. Function throug handeling(JS)
let btn1 = document.querySelector("#btn1");

btn1.onclick = (eve) =>{
    console.log(eve);
    console.log("btn click through function")
    alert("Clicked through Function")
};


let box1 = document.querySelector("#box1");

box1.onmouseover = () =>{
  console.log("hover");
}

/////////////////////////////////////////////////////

//Event Object: detail about event

// box1.event = (e) =>{
//   //handel here
// }

// btn1.onclick = (eve) =>{
//   console.log(eve);
//   console.log(eve.type);

// }

///////////////////////////////////////////////////////////////

//3. Event Listeners

// node.addEventListner(event, callback) callback: funtion/hamdler
// node.removeEventListner(event, callback)

let bnt2 = document.querySelector("#btn2");

btn2.addEventListener("click",()=>{          //()=>{} : This is a function
  console.log("Click through Event Listener - Handler 1");
  alert("Click through Event Listener - Handler 1");
 
});

btn2.addEventListener("click",(evn)=>{         
  console.log("Click through Event Listener - Handler 2");
  alert("Click through Event Listener - Handler2");

  alert(evn)
 
});

btn2.addEventListener("click",()=>{       
  console.log("Click through Event Listener - Handler 3");
});


const handler4 = ()=>{       
  console.log("Click through Event Listener - Handler 4");
}
btn2.addEventListener("click",handler4);

btn2.removeEventListener("click", handler4);







