const reverseString = function(word) {
    let wordLength = word.length;
    let reverseWord = [];
    for(let count = 0; count < word.length; count++){
        reverseWord[count] = word[wordLength -1];
        wordLength--;
    }
    return reverseWord.join('');
};

// Do not edit below this line
module.exports = reverseString;
