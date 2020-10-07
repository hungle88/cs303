/* eslint-disable id-length */
"use strict";
/**
 * 
 * @param {array} arr is an array of values
 * @param {function} func is the callback function
 * @param {number} init is the initial value
 * @returns {number} is the result
 */
function myReduce(arr, func, init) {
  let accumulator = init;
  for (let el of arr) {
    accumulator = func(accumulator, el);
  }
  return accumulator;
}

let testArr = [1, 2, 3, 4, 5];

let output = myReduce(testArr, sum, 2);

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number
 * @returns {number} sum of a and b
 */
function sum(a, b) {
  return a + b;
}

console.log(output);
