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
  setTimeout(function count() {
    console.log(n);
    let timer = setTimeout(count, 1000);
    if (n === to) {
      clearTimeout(timer);
    }
    n++;
  }, 1000);
}

printNumbers(1, 5);
