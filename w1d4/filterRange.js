/* eslint-disable id-length */
"use strict";
/**This function will looks for elements between a and b and returns an array of them.
 *
 * @param {object} arr is an array of number.
 * @param {number} a is a number.
 * @param {number} b is a number.
 * @returns {object} a new array of elements between a and b.
 */
function filterRange(arr, a, b) {
  let newArr = arr.filter((n) => n >= a && n <= b);
  return newArr;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
