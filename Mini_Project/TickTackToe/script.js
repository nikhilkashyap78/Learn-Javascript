let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset');

let turnO = true; //playerX , playerO

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
    [0, 4, 8], [2, 4, 6] //diagonals
]

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

const checkWinner = () => {
    for(let pattern of winPatterns){
        le t 
    }
}