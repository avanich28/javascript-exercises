// ME //
const convertToCelsius = function (fah) {
  const cel = (fah - 32) * (5 / 9);
  return Number(cel.toFixed(1));
};

const convertToFahrenheit = function (cel) {
  const fah = cel * (9 / 5) + 32;
  return Number(fah.toFixed(1));
};

// Solution
// const convertToCelsius = function (fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
// };

// const convertToFahrenheit = function (celsius) {
//   return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
// };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
