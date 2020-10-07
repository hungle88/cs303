/* eslint-disable id-length */
"use strict";
/**
 * 
 * @param {number} from is the min value
 * @param {number} to is the max value
 * @returns {number} numbers between min and max
 */
function printNumbers(from, to) {
  let n = from;
  let timer = setInterval(function () {
    console.log(n);
    if (n === to) {
      clearInterval(timer);
    }
    n++;
  }, 1000);
  if (timer === to) {
    clearInterval(timer);
  }
}

printNumbers(1, 5);
