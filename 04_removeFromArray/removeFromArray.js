const removeFromArray = function removeFromArray(array, ...numbers) {
    for(let counts = 0; counts < numbers.length; counts++){
        while(array.includes(numbers[counts]) == true){
            let position = array.indexOf(numbers[counts]);
            array.splice(position,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
