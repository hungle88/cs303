/* eslint-disable no-unused-vars */
"use strict";
/**
 * 
 * @param {string} Str is the string that needs to be removed the currency symbol and convert into number.
 * @returns {number} the amount of the money. 
 */
function extractCurrencyValue(Str) {
  let newStr = +str.slice(1);
  console.log(typeof newStr);
  return newStr;
}

let str = "$120";
let output = extractCurrencyValue(str);
console.log(output);
