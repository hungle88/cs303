/* eslint-disable id-length */
"use strict";
/**
 *
 * @param {object} arr is an array of string.
 * @returns {object} a sorted array.
 */
function copySorted(arr) {
  let newArr = arr.sort();
  return newArr;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
