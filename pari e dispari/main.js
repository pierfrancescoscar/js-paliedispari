// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Ref
let cpuRandNumb = randomNumber(1, 5);

// Ref
let userOddEven = prompt('Choose odd or even');

// Entered "odd" or "even" validator
while (userOddEven !== 'odd' && userOddEven !== 'even') {
    alert('Please, choose odd or even.');
    userOddEven = prompt('Choose odd or even').trim().toLowerCase();
}

// Ref
let userNumber = parseInt(prompt('Enter a number from 1 to 5'));

// Entered numbers validation
while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    alert('Please, enter a number from 1 to 5.');
    userNumber = parseInt(prompt('Enter a number from 1 to 5'));
}

// Sum between user entered number and cpu generated random number
let userCpuSum = userNumber + cpuRandNumb;

// Generate a random number from 1 to 5 for CPU:
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}









