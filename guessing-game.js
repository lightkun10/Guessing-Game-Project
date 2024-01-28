const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numAttempts;
let secretNumber;
let maxNumber;
let minNumber;

function checkGuess(guess) {
    if (guess > secretNumber) {
        console.log('Too high.');
        return false;
    } else if (guess < secretNumber) {
        console.log('Too low.');
        return false;
    } else if (guess === secretNumber) {
        console.log('Correct!');
        return true;
    };
};

function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        let resultFromGuess = checkGuess(Number(answer));

        if (resultFromGuess) {
            console.log("You win!");
            rl.close();
        } else {
            numAttempts--;
            if (numAttempts === 0) {
                console.log("You Lose... :(");
                rl.close();
            } else {
                askGuess();
            }
        };
    });
};


function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


// =============== MAIN FUNCTION ========================
function askLimit() {
    rl.question("Enter your limit (this is your healthbar): ", (limitPlay) => {
        numAttempts = Number(limitPlay);
        askRange();
    });
}

function askRange() {
    rl.question("Enter a max number: ", handleMaxNum);

    function handleMaxNum(inpMaxNum) {
        maxNumber = Number(inpMaxNum);
        rl.question("Enter a min number: ", handleMinNum);
    };

    function handleMinNum(inpMinNum) {
        minNumber = Number(inpMinNum);
        secretNumber = randomInRange(minNumber, maxNumber);
        console.log(`So you are thinking of a number between ${minNumber} and ${maxNumber}...`);
        askGuess();
    }
};


askLimit();
