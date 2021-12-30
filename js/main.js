'use strict';

//Elementos HTML
const playButton = document.querySelector('.js_playButton');
const userSelection = document.querySelector('.js_userSelection');
const resultText = document.querySelector('.js_resultText');
const userCounter = document.querySelector('.js_userCounter');
const computerCounter = document.querySelector('.js_computerCounter');
const restartButton = document.querySelector('.js_restartButton');

//Variables globales
let userScore = 0;
let computerScore = 0;
let totalMoves = 0;

//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//Generar movimiento ordenador
function getComputerSelection() {
    let randomNumber = getRandomNumber(9);
    let computerSelection = '';

    if (randomNumber <= 3) {
        computerSelection = 'Piedra';
    } else if (randomNumber >= 6) {
        computerSelection = 'Papel';
    } else {
        computerSelection = 'Tijera';
    }

    console.log(`El movimiento de la computadora es: ` + computerSelection);

    return computerSelection;
}

//Obtener movimiento usuaria
function getUserSelection() {
    return userSelection.value;
}

//Comparar movimientos y obtener resultado
//Mostrar resultado en HTML: mensaje y puntos
function compareSelections() {
    let computerSelection = getComputerSelection();
    let userSelection = getUserSelection();

    totalMoves += 1;

    if (userSelection === computerSelection) {
        resultText.innerHTML = 'Empate';
    } else if (userSelection === 'Piedra') {
        if (computerSelection === 'Papel') {
            resultText.innerHTML = '¡Has perdido!';
            computerScore += 1;
        } else if (computerSelection === 'Tijera') {
            resultText.innerHTML = '¡Has ganado!';
            userScore += 1;
        }
    } else if (userSelection === 'Papel') {
        if (computerSelection === 'Piedra') {
            resultText.innerHTML = '¡Has ganado!';
            userScore += 1;
        } else if (computerSelection === 'Tijera') {
            resultText.innerHTML = '¡Has perdido!';
            computerScore += 1;
        }
    } else if (userSelection === 'Tijera') {
        if (computerSelection === 'Piedra') {
            resultText.innerHTML = '¡Has perdido!';
            computerScore += 1;
        } else if (computerSelection === 'Papel') {
            resultText.innerHTML = '¡Has ganado!';
            userScore += 1;
        }
    }
    userCounter.innerHTML = userScore;
    computerCounter.innerHTML = computerScore;
}

//Bonus: parar juego
function stopGame() {

    if (totalMoves >= 10) {
        resultText.classList.add('lastResult')
        if (userScore > computerScore) {
            resultText.innerHTML = '¡Has ganado el juego!'
        } else if (userScore < computerScore) {
            resultText.innerHTML = 'Has perdido el juego...'
        } else {
            resultText.innerHTML = 'Empate'
        }
        playButton.classList.add('hidden');
        restartButton.classList.remove('hidden');
    }
}

function handleClickPlay(event) {
    event.preventDefault();
    compareSelections();
    stopGame();
}

function handleClickRestart(event) {
    event.preventDefault();
    playButton.classList.remove('hidden');
    restartButton.classList.add('hidden');
    resultText.classList.remove('lastResult')
    userScore = 0;
    computerScore = 0;
    totalMoves = 0;
    resultText.innerHTML = '¡Vamos a jugar!';
    userCounter.innerHTML = userScore;
    computerCounter.innerHTML = computerScore;
}

//Eventos
playButton.addEventListener('click', handleClickPlay);
restartButton.addEventListener('click', handleClickRestart);