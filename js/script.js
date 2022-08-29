let randomNumber = parseInt((Math.random()*50)+1);
// alert(randomNumber);
const submit = document.getElementById('btn');
const userInput = document.getElementById('number');
const prevGuess = document.getElementById('prevguess');
const remaining = document.getElementById('guesscount');
const info = document.getElementById('info');

let previousGuesses = [];
let numGuesses = 1;
let start = true;

if (start){
    submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
});
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 50){
        alert('Please enter a number less than 50!')
    } else {
        previousGuesses.push(guess);
        if (numGuesses === 5){
            if (guess != randomNumber){
                displayGuesses(guess);
                displayMessage(`Game Over! Number was ${randomNumber}`);
                endGame();
            }
            else{
                displayGuesses(guess);
                displayMessage(`Congratulations! You did it.`);
                endGame();
            }
        } else {
            displayGuesses(guess);
            checkGuess(guess);
            }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage(`Congratulation! You did it.`);
        // confettifunc();
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Your number is smaller! Try again!`);
    } else if (guess > randomNumber) {
        displayMessage(`Your number is bigger! Try again!`);
    }
}

function displayGuesses(guess){
    userInput.value = '';
    prevGuess.innerHTML += `${guess}  `;
    numGuesses++;
    remaining.innerHTML = `Remaining attempts: ${6 - numGuesses}  `;
}

function displayMessage(message){
    info.innerHTML = `<h3 style="color: #3A6B35">${message}</h3>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
}

function confettifunc(){
    alert("confetti");
}

document.querySelector("#number").onkeydown = function(event){
    if (event.which == 13){
        //alert(event.which);
        // e.preventDefault();         
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    }
}