"use strict";
/**
 *
 * @param {string} str is the string that needs to be uppercased first character.
 * @return {string} a string with the first character uppercased.
 */
function ucFirst(str) {
  let newStr = str.split("");
  newStr[0] = newStr[0].toUpperCase();
  newStr = newStr.join("");
  return newStr;
}

console.log(ucFirst("john"));
