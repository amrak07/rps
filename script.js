const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(playerChoice, computerChoice);
        updateScore(result);
        displayResult(result, playerChoice, computerChoice);
    });
});

function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(result) {
    if (result === 'player') {
        playerScore++;
    } else if (result === 'computer') {
        computerScore++;
    }
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function displayResult(result, playerChoice, computerChoice) {
    const resultMessage = document.getElementById('result-message');
    if (result === 'draw') {
        resultMessage.textContent = `It's a draw! You both chose ${playerChoice}.`;
    } else if (result === 'player') {
        resultMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}
