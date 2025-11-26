function main() {
    let humanScore = 0;
    let computerScore = 0;
    const numberOfRounds = 5;

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
    
    for(let i = 0; i < numberOfRounds; i++){
        playGame();
    }
    
    if (computerScore > humanScore)
        console.log(computerScore, humanScore, 'Computer wins!');
    else if (computerScore < humanScore)
        console.log(computerScore, humanScore, 'You win!');
    else
        console.log(computerScore, humanScore, 'Tie!');
}

main();