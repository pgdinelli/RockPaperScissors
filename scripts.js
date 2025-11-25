function main() {
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getComputerChoice() {
        const choice = getRandomInt(3);

        switch(choice){
            case 0:
                return 'Rock';
            case 1:
                return 'Paper';
            case 2:
                return 'Scissors';
        }
    }
     
}

main();