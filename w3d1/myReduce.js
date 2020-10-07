"use strict";
function myReduce(arr, func, init) {
  let accumulator = init;
  for (let el of arr) {
    accumulator = func(accumulator, el);
  }
  return accumulator;
}

let testArr = [1, 2, 3, 4, 5];

let output = myReduce(testArr, sum, 2);

function sum(a, b) {
  return a + b;
}

console.log(output);
