// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Refs

const userWord = prompt('Please, enter a word.');
const reverseWord = reverseCharacters(userWord);

// If this condition is verified, the entered word is a palindrome word, else not.

if (userWord === reverseWord) {
    alert('Your word is a palindrome word.');
} else {
    alert('Your word is not a palindrome word');
}

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





