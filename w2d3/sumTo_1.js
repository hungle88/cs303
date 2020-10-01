/* eslint-disable id-length */
"use strict";

/**Using the arithmetic progression formula.
 *
 * @param {number} n is the input number.
 * @returns {numner} return sum from 1 to the input number.
 */
function sumTo(n) {
  return (n * (1 + n)) / 2;
}

console.log(sumTo(100));
