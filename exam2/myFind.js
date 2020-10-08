/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myFind(arr, func) {
  for (let num of arr) {
    if (func(num)) {
      return num;
    }
  }
}

function greaterThanFive(n) {
  return n > 5;
}

let output = myFind(testArr, greaterThanFive);

console.log(output);
