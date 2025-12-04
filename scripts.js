function main() {
    let humanScore = 0;
    let computerScore = 0;

    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const result = document.querySelector('.results');
    const btnClear = document.querySelector('.clear');

    const buttons = document.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", () => {
            const computerChoice = getComputerChoice().toLowerCase();

            if (button === rockBtn && computerChoice === 'scissors') {
                humanScore++;
                result.innerHTML += `<p>${humanScore} ${computerScore} You win! Rock beats Scissors</p>`;
            } else if (button === scissorsBtn && computerChoice === 'paper') {
                humanScore++;
                result.innerHTML += `<p>${humanScore} ${computerScore} You win! Scissors beats Paper</p>`;
            } else if (button === paperBtn && computerChoice === 'rock') {
                humanScore++;
                result.innerHTML += `<p>${humanScore} ${computerScore} You win! Paper beats Rock</p>`;
            } else if (button === rockBtn && computerChoice === 'paper') {
                computerScore++;
                result.innerHTML += `<p>${humanScore} ${computerScore} Computer wins! Paper beats Rock</p>`;
            } else if (button === scissorsBtn && computerChoice === 'rock') {
                computerScore++;
                result.innerHTML += `<p>${humanScore} ${computerScore} Computer wins! Rock beats Scissors</p>`;
            } else if (button === paperBtn && computerChoice === 'scissors') {
                computerScore++;
                result.innerHTML += `<p>${humanScore} ${computerScore} Computer wins! Scissors beats Paper</p>`;
            } else {
                result.innerHTML += `<p>${humanScore} ${computerScore} Tied</p>`
            }

            if (humanScore === 5 || computerScore === 5) {
                result.innerHTML = checksWinner();
            }
        });
    });

    btnClear.addEventListener("click", () => {
        if(result.innerHTML !== '')
            result.innerHTML = '';
        humanScore = 0;
        computerScore = 0;
    })

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

    function checksWinner() {
        if (computerScore > humanScore)
            return `<p>Final score: ${humanScore} ${computerScore} Computer wins!</p>`;
        else if (computerScore < humanScore)
            return `<p>Final score: ${humanScore} ${computerScore} You win!</p>`;
        else
            return `<p>Final score: ${humanScore} ${computerScore} Tie!</p>`;
    }
}

main();
