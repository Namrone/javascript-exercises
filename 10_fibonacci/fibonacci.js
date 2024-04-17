const fibonacci = function(num) {
    let fib = 0;
    let fibLast = 1;
    let fibSecond = 0;
    console.log(typeof(num));
    if(num >= 0){
        if(num == 0){return 0;}
        else if(num == 1){return 1;}
        for(num; num > 1; num--){
            fib = fibLast + fibSecond;
            fibSecond = fibLast;
            fibLast = fib;
        }
        return fib;
    }
    else
        return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;

