
let playerPoints = 0;
let computerPoints = 0;
let playerScore = document.querySelector("#player");
let computerScore = document.querySelector("#computer")

const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let description = document.querySelector('#description');

function computerChoice() {
    const randInt = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];

    return choices[randInt];

}

function chooseRock(){
    const computer = computerChoice();

    if (computer === 'rock') {
        description.innerHTML = "It's a Tie!";
    }
    else if (computer === 'paper') {
        description.innerHTML = "Computer Wins!";
        computerPoints++;
        computerScore.innerHTML = "Computer = " + computerPoints;
    }
    else {
        description.innerHTML = "Player Wins!";
        playerPoints++;
        playerScore.innerHTML = "Player = " + playerPoints;
    }
}

function choosePaper(){
    const computer = computerChoice();

    if (computer === 'rock') {
        description.innerHTML = "Player Wins!";
        playerPoints++;
        playerScore.innerHTML = "Player = " + playerPoints;
    }
    else if (computer === 'paper') {
        description.innerHTML = "It's a Tie!";
    }
    else {
        description.innerHTML = "Computer Wins!";
        computerPoints++;
        computerScore.innerHTML = "Computer = " + computerPoints;
    }
}

function chooseScissors(){
    const computer = computerChoice();

    if (computer === 'rock') {
        description.innerHTML = "Computer Wins!";
        computerPoints++;
        computerScore.innerHTML = "Computer = " + computerPoints;
    }
    else if (computer === 'paper') {
        description.innerHTML = "Player Wins!";
        playerPoints++;
        playerScore.innerHTML = "Player = " + playerPoints;
    }
    else {
        description.innerHTML = "It's a Tie!";
    }

}

rock.onclick = chooseRock;
paper.onclick = choosePaper;
scissors.onclick = chooseScissors;
