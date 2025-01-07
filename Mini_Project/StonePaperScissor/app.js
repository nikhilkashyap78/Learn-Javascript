let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
}

const playGame = (userChoice) => {
        console.log("user choice", userChoice);
        //Generate Computer Choice
        const compChoice = generateCompChoice();
        console.log("comp choice", compChoice);

        if(userChoice===compChoice){
            //draw game
            drawGame();
        }else{
            //user
        }

}

choices.forEach((choice) => {

    choice.addEventListener("click",()=>{

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

