const choices = ["rocks","paper","scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");

function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    let gameresult="";
    if(playerchoice===computerchoice){
        gameresult = "It's a tie";
    }
    else{
        switch(playerchoice){
            case "rocks":
                gameresult=(computerchoice === "scissors") ? "You Win" : "You Lose";
                break;
            case "paper":
                gameresult = (computerchoice === "rock") ? "You Win" : "You Lose";
                break;
            case "scissors":
                gameresult = (computerchoice === "paper") ? "You Win" : "You Lose";
                break;


        }
    }
    player.textContent =`${playerchoice}`;
    computer.textContent = `${computerchoice}`;
    result.textContent = `${gameresult}`;
    result.classList.remove("greenText","redText")
    switch(gameresult){
        case "You Win":
            result.classList.add("greenText");
            break;
        case "You Lose":
            result.classList.add("redText");
            break;


    }
}