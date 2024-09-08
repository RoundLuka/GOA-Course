const playerScore = document.getElementById("playerScore");
const aiScore = document.getElementById("aiScore");
const win = document.getElementById("newGame");
const optionDiv = document.getElementById("userInput");

const choices = ['rock','paper','scissors'];

let myScore = 0;
let compScore = 0;

optionDiv.addEventListener("click",function(e){
    if(e.target.id != "rock" || e.target.id != "paper" || e.target.id != "scissors"){
        return;
    }

    const choiceId = e.target.id;

    const aiChoice = choices[Math.floor(Math.random() * choices.length)];

    if(choiceId === aiChoice){
        win.textContent = "Draw!";
    }
    else if((choiceId === 'rock' && aiChoice === "paper") || (choiceId === "scissors" && aiChoice === "rock") || (choiceId === 'paper' && aiChoice === 'scissors')){
        compScore++;
        aiScore.textContent = compScore;
        win.textContent = 'You lost!';
    }
    
});