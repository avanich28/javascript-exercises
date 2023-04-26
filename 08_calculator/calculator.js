const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function (arr) {
  return arr.length ? arr.reduce((acc, cur) => acc * cur, 1) : 0;
};

const power = function (a, b) {
  return a ** b; // Math.pow(a, b)
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  }
  let total = 1;
  for (let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Recursive!
// const factorial = function (a) {
//   if (a === 0) return 1;
//   return a * factorial(a - 1);
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
