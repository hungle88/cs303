"use strict";

function myFilter(arr, func) {
  let newArr = [];
  for (let el of arr) {
    if (func(el)) {
      newArr.push(el);
    }
  }
  return newArr;
}

function even(num) {
  return num % 2 === 0;
}

function odd(num) {
  return num % 2 !== 0;
}

function greaterThanFive(num) {
  return num > 5;
}
let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myFilter(testArr, even));
console.log(myFilter(testArr, odd));
console.log(myFilter(testArr, greaterThanFive));
