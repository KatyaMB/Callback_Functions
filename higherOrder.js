// Declaring the first function

function myFilterFunction(arr, filterFunc) {
    let filteredWords = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (filterFunc(word)) {
            filteredWords.push(word);
        }
    }
    return filteredWords;
}

// Callback function to check if a word has six letters
function hasSixLetters(word) {
    return word.length === 6;
}

// Creating an array of strings with 10 words
const animals = ["Lion", "Panther", "Elephant", "Turtle", "Beaver", "Cheetah", "Rhino", "Donkey", "Zebra", "Camel"];

// Use myFilterFunction to filter words with six letters
const sixLetterWords = myFilterFunction(animals, hasSixLetters);

console.log(sixLetterWords);
