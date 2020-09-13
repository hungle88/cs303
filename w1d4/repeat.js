"use strict";

/**
 * @return {number} the result must be a number
 */
function readNumber() {
  let num;
  do {
    num = prompt("Please neter a number: ");
  } while (!isFinite(num));

  if (num === "" || num === null) {
    return null;
  } else {
    return +num;
  }
}
console.log(readNumber());
