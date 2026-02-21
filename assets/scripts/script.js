// Selecionando DOM
const timerElement = document.querySelector('#timer');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const pauseButton = document.querySelector('#pauseButton');

// Inicio
let timer, minutos, segundos;
let timerRunning = false;

restartTimer();

// Eventos
startButton.addEventListener('click', startTimer);
    //resetButton.addEventListener('click', restartTimer);
    //pauseButton.addEventListener('click', pauseTimer);

// Funções
function startTimer() {
    timerRunning = true;
    updateTimer();
}

function restartTimer() {
    
}

function pauseTimer() {
    
}

function updateTimer() {
    let repeat;

    if(timerRunning) {
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
        
        if(!timerRunning) {
            clearInterval(repeat);
        }
    }
}

function showTimer() {
    timerElement.innerHTML = timer;
}