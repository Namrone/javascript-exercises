const palindromes = function (words) {
    const newStr = words.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();
    return newStr === newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
