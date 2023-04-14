// ME //
const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else {
    let sum = 0;
    if (num1 < num2) {
      for (let i = num1; i <= num2; i++) {
        sum += i;
      }
    } else {
      for (let i = num1; i >= num2; i--) {
        sum += i;
      }
    }
    return sum;
  }
};

// Solution
// const sumAll = function (min, max) {
//   if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//   if (min < 0 || max < 0) return "ERROR";
//   if (min > max) {
//     const temp = min;
//     min = max; // Destructuring varName = value
//     max = temp;
//   }
//   let sum = 0;
//   for (let i = min; i < max + 1; i++) {
//     sum += i;
//   }
//   return sum;
// };

// Do not edit below this line
module.exports = sumAll;
