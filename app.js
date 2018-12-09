/*
   Instructor of Game
   * player enter numbers between min and max.
   * check if this number is win number or not.
   * if this number is uncorrect, let user try again.
   * if not (number is correct), stop game
 */
// Get Elements From DOM
const minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message'),
      game = document.querySelector('#game');

/* ******************************************** */

// Get game vars
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;
    console.log(winningNum);

/* *************************************************** */

// Add Event listener
guessBtn.addEventListener('click', checkGuess);
game.addEventListener('mousedown', (e) => {
     if(e.target.className === 'play-again') {
         window.location.reload();
     }
})

/* *********************************************** */

// Buillding Functions

/* Check if number is correct */
function checkGuess() {
    let guess = parseInt(guessInput.value);
    /* If user enter number outside min and max */
    if(isNaN(guess) || guess < min ||     guess > max) {
        alert(`Please enter number between ${min} and ${max}`);
        guessInput.value = '';
        return null;
    } 

    /* Win Case */
    if(guess === winningNum ) {

         /* WIN Case */
         win();

          } else {
              /* Lose Case */
              guessesLeft -= 1;
              if(guessesLeft === 0) {
                  /* Lose Case */
                  lose();
              } else {
                    // Try Again
                    tryAgain();
             }
    }
}

/* Set message */
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

/* Win Case */
function win() {
    // Change border color
    guessInput.style.borderColor = 'green';
    // Disable input field
    guessInput.disabled = true;
    // Create message to user if WON!!
    setMessage(`${winningNum} is correct, You WIN!!`, 'green');
    alert('Well WORK!');
}

/* Lose Case */
function lose() {
    // Change border color
    guessInput.style.borderColor = 'red';
    // Disable input field
    guessInput.disabled = true;
    // Create message to user if WON!!
    setMessage(`Game over, You LOST. The correct number was ${winningNum}`, 'red');
    // Play again
   guessBtn.value = 'Play again';
   guessBtn.className = 'play-again';
}

// Get random number
function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

/* Try Again */
function tryAgain() {
    // Change border color
    guessInput.style.borderColor = 'red';
    // Create message to user
    setMessage(`${guessInput.value} is not correct, ${guessesLeft} gusses left`, 'red');
    // Empty input field
    guessInput.value = '';
}

