// Selecionando DOM
const timerElement = document.querySelector('#timer');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const pauseButton = document.querySelector('#pauseButton');

// Inicio
let timer, minutos, segundos, minutosElement, segundosElement;
let timerRunning = false;
let repeat = null;

restartTimer();

// Eventos
startButton.addEventListener('click', startTimer);
    //resetButton.addEventListener('click', restartTimer);
    //pauseButton.addEventListener('click', pauseTimer);

// Funções
function startTimer() {
    if(!timerRunning) {
        timerRunning = true;
        updateTimer();
    }
}

function restartTimer() {
    segundos = 0;
    minutos = 0;

    updateTimer();
}

function pauseTimer() {
    
}

function updateTimer() {
    if(timerRunning && !repeat) {
        repeat = setInterval(() => {
            segundos += 1;

            if(segundos == 60) {
                minutos += 1;

                segundos = 0;
            }

            segundosElement = segundos;
            minutosElement = minutos;

            if(segundos < 10) {
                segundosElement = `0${segundos}`;
            }
            if(minutos < 10) {
                minutosElement = `0${minutos}`;
            }

            timer = `${minutosElement}:${segundosElement}`;

            showTimer();
        }, 1000);
    } else {
        clearInterval(repeat);
    }
}

function showTimer() {
    timerElement.innerHTML = timer;
}