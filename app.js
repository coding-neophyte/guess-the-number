
import { compareNumbers } from './test/utils.js';
const numberInput = document.getElementById('number-input');
const submitGuess = document.getElementById('guess-button');
const numOfGuesses = document.getElementById('number-of-guesses');
const highOrLow = document.getElementById('high-low');
const winOrLose = document.getElementById('win-lose');

let correctAnswer = Math.ceil(Math.random() * 20);
let guessesRemaining = 3;


submitGuess.addEventListener('click', () => {
    guessesRemaining--;
    numOfGuesses.textContent = guessesRemaining;
    console.log(correctAnswer);
    let userGuess = Number(numberInput.value);
    if (compareNumbers(userGuess, correctAnswer) === 0) {
        highOrLow.textContent = 'just right';
    } else if (compareNumbers(userGuess, correctAnswer) === 1) {
        highOrLow.textContent = 'too high';
    } else {
        highOrLow.textContent = 'too low';
    }
    if (guessesRemaining === 0) {
        submitGuess.disabled = true;

    }
});
