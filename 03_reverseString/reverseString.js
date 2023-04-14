const reverseString = function (string) {
  return string
    .split(" ")
    .reverse()
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

// Do not edit below this line
module.exports = reverseString;
