// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Ref
const userOddEven = prompt('Scegli tra pari o dispari');
// console.log(userOddEven);
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
// console.log(userNumber);
let cpuRandNumb = randomNumber(1, 5);

// Entered numbers Validation
if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
    alert('Please, enter a number from 1 to 5.');
}

// Sum between user entered number and cpu generated random number

let userCpuSum = userNumber + cpuRandNumb;
console.log(userCpuSum);




// Generate a random number from 1 to 5 for CPU:

function randomNumber(min, max) {
    let cpuRandNumb = Math.floor(Math.random() * (max - min + 1) ) + min;
    // console.log(cpuRandNumb);
}









