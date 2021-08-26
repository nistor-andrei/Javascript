"use strict";
// function findLongestWordLength(str) {
//   let arr = str.split(" ");
//   let longestWord;
//   let start = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > start) {
//       start = arr[i].length;
//     }
//   }
//   return (longestWord = start);
// }

// console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

function largestOfFour(arrays) {
  let biggestNumbers = [];
  let start = 0;
  for (const array of arrays) {
    start = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > start) {
        start = array[i];
      }
    }
    biggestNumbers.push(start);
  }
  return biggestNumbers;
}

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
