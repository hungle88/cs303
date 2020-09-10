"use strict";
/**
 *
 * @param {object} obj is the object that has height and width that need to be multiplied by 2.
 * @returns {object} the object that have height and width that are already multipled by 2.
 */
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (isFinite(obj[key])) {
      obj[key] = obj[key] * 2;
    }
  }

  return obj;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

let output = multiplyNumeric(menu);

console.log(output);
