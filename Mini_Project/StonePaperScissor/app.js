let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll("choices");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        console.log("clicked");
    });

});