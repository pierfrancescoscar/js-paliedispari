// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Refs

const userWord = prompt('Please, enter a word.');
const reverseWord = reverseCharacters(userWord);

// Create a function in order to know if the entered word is palindrome

function reverseCharacters(word) {
    // Reset ref
    let reverse = '';
    // Cycle
    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i]);
        reverse += word[i];
    }

    return reverse;

}

