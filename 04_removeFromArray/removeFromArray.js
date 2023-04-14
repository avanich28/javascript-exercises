// ME //
const removeFromArray = function (arr, ...removeNum) {
  let newArr = [];
  for (const num of arr) {
    const exist = removeNum.filter((reNum) => reNum === num);
    if (!exist.includes(num)) newArr.push(num);
  }
  return newArr;
};

// Solution 1
// const removeFromArray = function (arr, ...removeNum) {
//   const newArr = [];
//   arr.forEach((el) => {
//     if (!removeNum.includes(el)) {
//       newArr.push(el);
//     }
//   });
//   return newArr;
// };

// Solution 2
// const removeFromArray = function (arr, ...removeNum) {
//   return arr.filter((el) => !removeNum.includes(el));
// };

// Do not edit below this line
module.exports = removeFromArray;
