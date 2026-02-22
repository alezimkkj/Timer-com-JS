// Selecionando DOM
const timerElement = document.querySelector('#timer');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const pauseButton = document.querySelector('#pauseButton');

// Inicio
let minutos, segundos;
let timerRunning = false;
let repeat = null;

restartTimer();

// Eventos
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', restartTimer);
pauseButton.addEventListener('click', pauseTimer);

// Funções
function startTimer() {
    if(!timerRunning) {
        timerRunning = true;

        updateTimer();
    }
}

function restartTimer() {
    clearInterval(repeat);
    repeat = null;

    segundos = 0;
    minutos = 0;

    timerRunning = false;

    showTimer();
}

function pauseTimer() {
    clearInterval(repeat);
    repeat = null;
    
    timerRunning = false;

    showTimer();
}

function updateTimer() {
    if(timerRunning && repeat == null) {
        repeat = setInterval(() => {
            segundos ++;

            if(segundos == 60) {
                minutos ++;
                segundos = 0;
            }

            showTimer();
        }, 1000);
    }
}

function showTimer() {
     let segundosElement = segundos < 10 ? `0${segundos}` : segundos;
    let minutosElement = minutos < 10 ? `0${minutos}` : minutos;

    timerElement.innerHTML = `${minutosElement}:${segundosElement}`;
}