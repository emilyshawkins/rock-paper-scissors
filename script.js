const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const computerCardImg = document.querySelector('.comp-img');

const message = document.querySelector('#description');
const playerScore = document.querySelector('#player');
let playerPoints = 0;
const computerScore = document.querySelector('#computer');
let computerPoints = 0;

function playerChoice(choice) {
    shuffle(choice);
}

function computerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function shuffle(choice) {
    const optionImages = ['images/rock.png', 'images/paper.png', 'images/scissors.png'];
    shuffling = setInterval(function() {
        computerCardImg.src = optionImages[Math.floor(Math.random() * 3)];
    }, 50);

    setTimeout(function() {
        clearInterval(shuffling)
        compChoice = computerChoice();
        computerCardImg.src = 'images/' + compChoice + '.png';
        checkWinner(choice, compChoice);
    }, 1000);

}

function checkWinner(player, computer) {

    if (player === computer) {
        message.innerHTML = "It's a Tie!";
    }

    else if (player === 'rock') {
        if (computer === 'paper') {
            message.innerHTML = "You Lose!";
            updateScore('computer');
        }
        else if (computer === 'scissors') {
            message.innerHTML = "You Win!";
            updateScore('player')
        }
    }
    
    else if (player === 'paper') {
        if (computer === 'rock') {
            message.innerHTML = 'You Win!';
            updateScore('player');
        }
        else if (computer === 'scissors') {
            message.innerHTML = 'You Lose!';
            updateScore('computer');
        }
    }

    else if (player === 'scissors') {
        if (computer === 'rock') {
            message.innerHTML = 'You Lose!';
            updateScore('computer');
        }
        else if (computer === 'paper') {
            message.innerHTML = 'You Win!';
            updateScore('player');
        }
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerPoints++;
        playerScore.innerHTML = 'Player = ' + playerPoints;
    }
    else if (winner === 'computer') {
        computerPoints++;
        computerScore.innerHTML = 'Computer = ' + computerPoints;
    }
}

rockButton.onclick = () => playerChoice('rock');
paperButton.onclick = () => playerChoice('paper');
scissorsButton.onclick = () => playerChoice('scissors');
