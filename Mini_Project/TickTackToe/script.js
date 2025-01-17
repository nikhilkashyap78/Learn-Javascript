let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newGmeBtn = document.querySelector('#playAgain');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.querySelector('.msg');

let turnO = true; //playerX , playerO

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
    [0, 4, 8], [2, 4, 6] //diagonals
]

//Reset the game
resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add('hide');
}

//Add event listener and swith player
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("clicked");
        if (turnO){
            //playerO
            box.innerText = "O";
            turnO = false;
        }
        else{
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
 
    });
});

const disabledBoxes = () =>{
     for (let box of boxes){
         box.disabled = true;
     }
 };

 const enabledBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Player ${winner} has won!`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
};

const checkWinner = () => {

    //check if any player has won
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        //Check if all 3 positions are not empty
        if(pos1Val != "" || pos2Val != "" || pos3Val != ""){
            if (pos1Val == pos2Val && pos2Val == pos3Val){
               console.log("Winner", pos1Val);
               showWinner(pos1Val);         
            }
        }
    }
}

drawfun = ()=>{
    
}
newGmeBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);