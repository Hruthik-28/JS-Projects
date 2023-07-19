let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessesSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number');
    } else if (guess < 1 || guess > 100) {
        alert('Please Enter a Valid Number between 1 to 100');
    }else{
        prevGuess.push(guess);
        if (numGuess === 10) {
            cleanupGuess(guess);
            displayMessage(`Game Over. \nIt Was ${randomNumber} NOOB`);
            endGame();
        }else {
            cleanupGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`You guess is Too Low`);
    }else if(guess > randomNumber){
        displayMessage(`You guess is Too High`);
    }
}

// cleanup Method
function cleanupGuess(guess){
    userInput.value = '';
    guessesSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id = 'newGame'> New Game</button>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', () => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        let prevGuess = []
        let numGuess = 1
        guessesSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}

