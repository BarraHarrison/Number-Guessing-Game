// script.js

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    attempts += 1;
    let message = '';

    if (guess < secretNumber) {
        message = 'Too low!';
    } else if (guess > secretNumber) {
        message = 'Too high!';
    } else if (guess === secretNumber) {
        message = `Congrats! You guessed the correct number in ${attempts} attempts!`;
        document.getElementById('guessButton').disabled = true; // Disable button after correct guess
    }

    document.getElementById('message').innerText = message;
    document.getElementById('attempts').innerText = `Attempts: ${attempts}`;

    // Clears input field
    guessInput.value = '';
}

document.getElementById('guessInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        makeGuess();
    }
});
