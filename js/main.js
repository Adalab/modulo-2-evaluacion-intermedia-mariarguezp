'use strict';

//Variables globales
const playButton = document.querySelector('.js_playButton');
const userSelection = document.querySelector('.js_userSelection');

//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function displayMessage() {
    const userValue = userSelection.value;
    console.log(`Tu movimiento es: ` + userValue);
    
}

function changePoints() {
    const randomNumber = getRandomNumber(10);

    if (randomNumber < 3) {
        let computerValue = 'Piedra';
    } else if (randomNumber >= 6) {
        let computerValue = 'Papel';
    } else if (randomNumber > 6) {
        let computerValue = 'Tijera';
    }

    console.log(`El movimiento de la computadora es: ` + computerValue);
}

function handleClickPlay(event) {
    event.preventDefault();
    displayMessage()
    changePoints()
}

//Listeners
playButton.addEventListener('click', handleClickPlay);