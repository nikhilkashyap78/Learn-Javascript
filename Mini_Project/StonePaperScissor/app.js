let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    Math.random() * 10;

};

const playGame = (userChoice) => {
        console.log("user choice", userChoice);
        //Generate Computer Choice

}

choices.forEach((choice) => {

    choice.addEventListener("click",()=>{

        const userChoice = choice.getAttribute("id");
        console.log("clicked", userChoice);
        playGame(userChoice);
    });
});

