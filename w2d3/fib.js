/* eslint-disable id-length */
"use strict";
/**Fibonacci numbers
 * 
 * @param {number} n is the ordinal number of fibonacci 
 * @return {number} is the fibonacci number.  
 */
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
 
console.log(fib(7));