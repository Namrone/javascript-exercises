const repeatString = function repeatString(word,count) {
    let phrase = '';
    if(count < 0) return 'ERROR';
    for(count; count > 0; count--) phrase += word;
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
