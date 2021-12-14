'use strict';

//Variables globales
const playButton = document.querySelector('.js_playButton');
const userSelection = document.querySelector('.js_userSelection');

//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function getUserValue() {
    const userValue = userSelection.value;
    console.log(`Tu movimiento es: ` + userValue);
    return userValue;
    
}

function getComputerValue() {
    const randomNumber = getRandomNumber(10);
    let computerValue = '';

    if (randomNumber < 3) {
        computerValue = 'Piedra';
    } else if (randomNumber >= 6) {
        computerValue = 'Papel';
    } else if (randomNumber > 6) {
        computerValue = 'Tijera';
    }

    console.log(`El movimiento de la computadora es: ` + computerValue);

    return computerValue;
}

function compareValues() {
    if (userValue === 'Piedra' && computerValue === '')

}

function handleClickPlay(event) {
    event.preventDefault();
    getUserValue()
    getComputerValue()
}

//Listeners
playButton.addEventListener('click', handleClickPlay);