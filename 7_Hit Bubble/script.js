const btm = document.getElementById("btm");
const highScoreEle = document.getElementById("highScore");
const scoreDisplay = document.getElementById("score");
const hitNumber = document.getElementById("hitNumber");

let score = 0;
let randomHitNum = 0;
let timerStart = 60;
let highScore = 0;


function getNewHit() {
    randomHitNum = Math.floor(Math.random() * 10);
    hitNumber.textContent = randomHitNum;
}

function increaseScore() {
    score += 10;
    scoreDisplay.textContent = score;
}

function randomBubble() {
    let clutter = "";

    for (let i = 0; i <= 125; i++) {
        const rn = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble">${rn}</div>`; 
    }

    btm.innerHTML = clutter;
}

function timer() {
    const timer = setInterval(function() {
        if (timerStart > 0) {
            timerStart--;
            document.querySelector("#timer").textContent = timerStart;
        }else if(timerStart == 0){
            finalResult();
        }else{
            clearInterval(timer);
        }
    }, 1000);
}

function finalResult() {
    hitNumber.textContent = 0;
    btm.innerHTML = "";
    const gameOver = document.createElement('h2');
    gameOver.innerHTML = `Game Over`;
    gameOver.style.fontSize = "50px";
    btm.appendChild(gameOver);

    const newGameBtn = document.createElement('button');
    newGameBtn.innerHTML = `New Game`;
    btm.appendChild(newGameBtn);
    btm.style.flexDirection = "column";

    newGameBtn.addEventListener('click', () => {
        btm.innerHTML = "";
        timerStart = 60;
        randomBubble();
        getNewHit();
        updateHighScore();
        score = 0;
        scoreDisplay.textContent = score;
  
    });

}

function updateHighScore() {
    if (score > highScore) {
        highScoreEle.textContent = score; 
    }   
}


btm.addEventListener('click', (dets) => {
    const clickedNum = Number(dets.target.textContent);
    if (clickedNum === randomHitNum) {
        increaseScore();
        randomBubble();
        getNewHit();
    }
});




randomBubble();
timer();
getNewHit();

