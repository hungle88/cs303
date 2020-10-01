/* eslint-disable id-length */
"use strict";
/**Calculate factorial
 * 
 * @param {number} n we want to get the factorial value of this number
 * @returns {number} the result of the factorial function of number n.
 */
function factorial(n) {
  if (n <= 0) {
    return 1;
  } else return n * factorial(n - 1);
}

console.log(factorial(5));
