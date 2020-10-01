/* eslint-disable id-length */
"use strict";
/**Sum all numbers till the given one - Using a recursion.
 *
 * @param {number} n is the input number.
 * @returns {numner} return sum from 1 to the input number.
 */
function sumTo(n) {
  return n === 1 ? n : n + sumTo(n - 1);
}

console.log(sumTo(100));
