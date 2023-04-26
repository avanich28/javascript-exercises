// ME //
const fibonacci = function (member) {
  if (member < 0) return "OOPS";
  if (member === 0) return 0;

  let fiboArr = [];
  for (let i = 0; i < member; i++) {
    if (i < 2) fiboArr.push(1);
    else fiboArr.push(fiboArr[i - 2] + fiboArr[i - 1]);
  }
  return fiboArr[member - 1];
};

// Solution
// const fibonacci = function (count) {
//   if (count < 0) return "OOPS";
//   if (count === 0) return 0;
//   let a = 0;
//   let b = 1; // i = 0 || 1st position
//   for (let i = 1; i < count; i++) {
//     const tempt = b;
//     b = a + b;
//     a = tempt;
//   }
//   return b;
// };

// Do not edit below this line
module.exports = fibonacci;
