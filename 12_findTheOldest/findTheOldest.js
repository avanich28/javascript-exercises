// ME //
const findTheOldest = function (people) {
  return people.sort((a, b) => {
    const aYear = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
    const bYear = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
    return bYear - aYear;
  })[0];
};

// Solution
// const findTheOldest = function (array) {
//   return array.reduce((acc, cur) => {
//     const oldestAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
//     const currentAge = getAge(cur.yearOfBirth, cur.yearOfDeath);
//     return oldestAge < currentAge ? cur : acc;
//   });
// };

// const getAge = function (birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };

// Do not edit below this line
module.exports = findTheOldest;
