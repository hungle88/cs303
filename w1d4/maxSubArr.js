"use strict";
/**
 *
 * @param {object} arr is an array of numbers.
 * @returns {number} the maximal sub-array sum.
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let partialSum = 0;
    for (let j = i; j < arr.length; j++) {
      partialSum += arr[j];
      maxSum = Math.max(partialSum, maxSum);
    }
  }

  return maxSum;
}

let arr = [-1, 2, 3, -9];
let output = getMaxSubSum(arr);
console.log(output);
