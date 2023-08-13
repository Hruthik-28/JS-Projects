const btm = document.getElementById("btm");
const scoreDisplay = document.querySelector("#score");
const hitNumber = document.querySelector("#hitNumber");
const container = document.getElementById('container');

let score = 0;
let randomHitNum = 0;


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
        const rn = Math.floor(Math.random() * 10)
        clutter += `<div id="bubble">${rn}</div>`; 
    }

    btm.innerHTML = clutter
}

function timer() {
    let timerStart = 60;

    setInterval(function() {
        if (timerStart > 0) {
            timerStart--;
            document.querySelector("#timer").textContent = timerStart;
        }else if(timerStart == 0){
            finalResult();
        }else{
            clearInterval(timerStart);
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

    // const restartBtn = document.createElement('button');
    // restartBtn.innerHTML = `Restart`;
    // btm.appendChild(restartBtn);
    // btm.style.flexDirection = "column";

}

function restart() {
    btm.classList.add("")
}

document.querySelector("#btm").addEventListener('click', (dets) => {
    const clickedNum = Number(dets.target.textContent);
    if (clickedNum === randomHitNum) {
        increaseScore();
        randomBubble();
        getNewHit();
    }
});




randomBubble();
timer();
getNewHit()