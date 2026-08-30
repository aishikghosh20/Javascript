const choices= ["rock", "paper", "scissors"];

const playerdisplay = document.getElementById("playerdisplay");
const compdisplay = document.getElementById("compdisplay");
const resultdisplay = document.getElementById("result");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");

let playerscore = 0;
let computerscore = 0;
function playGame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerchoice);

    let result = "";

    if (playerchoice === computerchoice){
        result= "IT'S A TIE!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result= (computerchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result= (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result= (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerdisplay.textContent = `PLAYER: ${playerchoice}`;
    compdisplay.textContent = `COMPUTER: ${computerchoice}`;
    resultdisplay.textContent = result;
    resultdisplay.classList.remove("greentext", "redtext", "yellowtext");
    switch(result){
        case "YOU WIN!":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "YOU LOSE!":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;
        default:
            resultdisplay.classList.add("yellowtext");
            break;
    }


}
