/* eslint-disable id-length */
"use strict";
/**this function will modify the array and remove all the numbers not in the range between min value and max value.
 *
 * @param {array} arr is an array of numbers.
 * @param {number} a is the min value.
 * @param {number} b is the max value.
 *
 * @returns {array} an array of numbers between min value and max value.
 */
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);
