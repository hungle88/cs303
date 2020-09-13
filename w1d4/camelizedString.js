"use strict";
/**
 *
 * @param {string} str is the string that needs to be camelized.
 * @return {string} the camelized string.
 */
function camelize(str) {
  let strArray = str.split("-");
  let tempArray = strArray.map(
    (words) => words[0].toUpperCase() + words.slice(1)
  );
  let newStr = tempArray.join("");
  newStr = newStr[0].toLowerCase() + newStr.slice(1);

  return newStr;
}

let str = "border-left-width";
let output = camelize(str);
console.log(output);
