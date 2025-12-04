function main() {
    let humanScore = 0;
    let computerScore = 0;
    const numberOfRounds = 5;

    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const result = document.querySelector('.results');

    rockBtn.addEventListener("click", playGame);
    paperBtn.addEventListener("click", playGame);
    scissorsBtn.addEventListener("click", playGame);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getComputerChoice() {
        const choice = getRandomInt(3);

        switch (choice) {
            case 0:
                return 'Rock';
            case 1:
                return 'Paper';
            case 2:
                return 'Scissors';
        }
    }

    function getHumanChoice() {
        const choice = prompt('Enter your choice:');
        return choice;
    }


    function playGame() {
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice().toLowerCase();

        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore++;
        }

    }

    function checksWinner() {
        if (computerScore > humanScore)
            return `${computerScore} ${humanScore} Computer wins!`;
        else if (computerScore < humanScore)
            return `${computerScore} ${humanScore} You win!`;
        else
            return `${computerScore} ${humanScore} Tie!`;
    }

    if(humanScore === 5 || computerScore === 5)
        result.textContent = checksWinner();
    else {
        result.textContent = '';
    }

    // for (let i = 0; i < numberOfRounds; i++) {
    //     playGame();
    // }

    console.log(checksWinner());
}

main();