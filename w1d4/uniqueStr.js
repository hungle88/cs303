"use strict";
/**This function filters unique array members
 *
 * @param {arry} arr is an array of string.
 * @returns {array} an array of unique items of arr.
 */
function unique(arr) {
  let unique = arr.filter((item, index) => arr.indexOf(item) === index);
  return unique;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));
