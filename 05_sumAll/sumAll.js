const sumAll = function sumAll(num1, num2){
    let sum = 0;
    if(num1 > 0 && num2 > 0){
        for(let count = Math.min(num1,num2); count <= Math.max(num1,num2); count++){
            sum += count;
        }
        return sum;
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
