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
    for (let i = 0; i < array.length; i++) {
      if (array[i] > start) {
        start = array[i];
      } else {
      }
    }
    biggestNumbers.push(start);
  }
  return biggestNumbers;
}

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
