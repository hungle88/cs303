/* eslint-disable id-length */
"use strict";


/**
 * 
 * @param {number} a is the first number
 * @returns {number} the sum of a and b
 * 
 */
function sum(a) {
    //b is the second number
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
