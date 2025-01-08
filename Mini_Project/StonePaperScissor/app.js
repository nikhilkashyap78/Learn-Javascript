let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScor = document.querySelector("#userScor");
const comScor = document.querySelector("#comScor");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerHTML = "Game was Draw";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScor.innerHTML = userScore;
        console.log("User Wins");
        msg.innerHTML = "You Wins";
    }

    else{
        comScore++;
        comScor.innerHTML = comScore;
        console.log("Computer Wins");
        msg.innerHTML = "Computer Wins";
    };
};

const playGame = (userChoice) => {
        console.log("user choice", userChoice);
        //Generate Computer Choice
        const compChoice = generateCompChoice();
        console.log("comp choice", compChoice);

        if(userChoice === compChoice){
            //draw game
            drawGame();
            
        }else{
                //userWins
            let userWin = true;

            if(userChoice === "rock"){
                //scissor paper
                userWin = compChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper"){
                //rock scissor
                userWin = compChoice === "scissor" ? false : true;
            }
            else {
                //rock paper
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin);

        };
        

};

choices.forEach((choice) => {

    choice.addEventListener("mouseover",()=>{

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

