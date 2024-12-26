let btn1 = document.querySelector("#btn1");

btn1.onclick = (eve) =>{
    console.log(eve);
    console.log("btn click")
    alert("hiiiiiiiii")
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

btn1.onclick = (eve) =>{
  console.log(eve);
  console.log(eve.type);

}