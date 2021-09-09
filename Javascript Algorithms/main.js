"use strict";

// 1.display in the console the numbers from 1 to 50
for (let i = 1; i < 51; i++) {
  console.log(i);
}
// 2.display in the console the odd numbers from 1 to 50. Implement it using an if statement (remember that we have a % operator that gives you the remainder of a division)

for (let i = 1; i < 51; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 2.2 Implement it using only a for statement, no ifs

for (let i = 1; i < 51; i += 2) {
  console.log(i);
}

// 3 implement the following function: function addition(first, last) { }
// The function needs to add all numbers between first and last and return the result (use iteration not maths!), including first and last, e.g. addition(2, 4) would return 9

function addition(first, last) {
  let result = 0;
  for (let i = first; i <= last; i++) {
    result += i;
  }
  return result;
}

console.log(addition(2, 4));

// 3.2 Bonus: Implement the function so that first and last don't need to be in ascending order (use iteration and condtions not maths!), e.g. addition(4, 2) would still return 9

function descAddition(first, last) {
  let result = 0;
  for (let i = first; last <= i; i--) {
    result += i;
  }
  return result;
}

console.log(descAddition(4, 2));

// 4. Implement the following function: function maximum(a, b, c) {}

function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

console.log(getMaxNumber(6, 1, 5));

// 5. Implement the following function: function fizzBuzz(num){}
/* lists all numbers from 1 to num
every number that is divisible by 3 is replaced with the word 'fizz'
every number that is divisible by 5 is replaced with the word 'buzz'
every number that is divisible by both 3 and 5 is replaced by the word 'fizzbuzz'
e.g. fizzBuzz(16) => '1 2 fizz 4 buzz 6 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16'
Bonus: have a maximum of two if statements (including else if)
 */

function fizzBuzz(num) {
  let output = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "fizzbuzz ";
    }
    if (i % 3 === 0) {
      output += "fizz ";
    } else if (i % 5 === 0) {
      output += "buzz ";
    } else {
      output = result + i + " ";
    }
  }
  return result;
}

console.log(fizzBuzz(16));

//5.1 function fizzBuzz version 2.0

function fizzBuzz2(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    let tmp = i + " ";
    if (i % 3 === 0) {
      result += "fizz";
      tmp = " ";
    }
    if (i % 5 === 0) {
      result += "buzz";
      tmp = " ";
    }

    result += tmp;
  }
  return result;
}

console.log(fizzBuzz2(16));

// Challenge

function pattern(width, height) {
  let pattern = "";
  for (let i = 0; i < width; i++) {
    for (let j = 0 + i; j < height + i; j++) {
      if (j % 2 === 1) {
        pattern += "1 ";
      } else if (j % 2 === 0) {
        pattern += "0 ";
      }
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(pattern(4, 4));
