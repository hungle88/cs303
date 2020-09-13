"use strict";
/**
 * 
 * @param {string} str is the string value needs to be truncated. 
 * @param {number} maxlength is the length we want to keep.
 * @returns {string} the truncated string.
 */
function truncate(str, maxlength) {
  let newStr;
  if (str.length > maxlength) {
    newStr = str.slice(0, maxlength - 1) + "...";
    return newStr;
  } else return str;
}

let str = "Hello this is a very very very very very very long string";

let output = truncate(str, 25);

console.log(output);
