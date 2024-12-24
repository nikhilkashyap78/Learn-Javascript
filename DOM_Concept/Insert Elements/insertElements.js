//Insert Element 

//Step 1: Create Element 

//let ele = document.createElement("div")

//Step 2: ADD

//node.append(ele) : adds at end of node(inside)
//node.prepend(ele) : adds at start of node(inside)
//node.before(ele) : adds before node(outside)
//node.after(ele) : adds after node(outside)

let ele = document.createElement("h1"); 
ele.innerHTML = "<i>Hi, wahts up</i>";

document.querySelector("div").after(ele);

//div.after(ele);

///////////////////////////////////////////////

//node.remove() : remove the node

let hi = document.querySelector("h1")
hi.remove()