"use strict";
/**This function checks if the string value contains "xxx" or "viagra".
 *
 * @param {string} str the string that needs to be checked
 * @returns {boolean} the result is true of false
 */
function checkSpam(str) {
  str = str.toLowerCase();
  let strArray = str.split(" ");
  for (let words of strArray) {
    if (words.includes("viagra") || words.includes("xxx")) {
      return true;
    }
  }
  return false;
}

let str = "xXxxx hello";
// let str ="hello how are you";
// let str_ ="buy viAgRA noW";

console.log(checkSpam(str));
