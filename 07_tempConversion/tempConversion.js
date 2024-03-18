const convertToCelsius = function(temperature) {
  let convertTemp = ((temperature - 32) * (5/9)).toFixed(1);
  return parseFloat(convertTemp);
};

const convertToFahrenheit = function(temperature) {
  let convertTemp = ((temperature * (9/5)) + (32)).toFixed(1);
  return parseFloat(convertTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
