const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	const addAll = arr.reduce((total,currentItem) => total + currentItem,0);
  return addAll;
};

const multiply = function(arr) {
  const multAll = arr.reduce((total,currentItem) => total * currentItem,1);
  return multAll;
};

const power = function(num1, num2) {
	let total = 1;
  for(let i = 0; i < num2; i++){
    total *= num1;
  }
  return total;
};

const factorial = function(num) {
	let total = 1;
  for(num; num > 0; num--){
    total *= num;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
