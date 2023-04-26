// ME //
const palindromes = function (words) {
  const strArr = words.toLowerCase().split("");
  const exception = ["!", ".", ",", " "];
  const clearPunc = strArr
    .map((str) => (exception.includes(str) ? null : str))
    .filter((str) => str !== null);

  const [newStr, reverseStr] = [
    clearPunc.join(""),
    clearPunc.reverse().join(""),
  ];
  return newStr === reverseStr;
};

// Solution //
// const palindromes = function (string) {
//   const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return processedString.split("").reverse().join("") === processedString;
// };

// Do not edit below this line
module.exports = palindromes;
