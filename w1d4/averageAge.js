/* eslint-disable id-length */

"use strict";
/**Calculate the average of all users
 *
 * @param {array} users is an array of username.
 * @returns {number} average age of all users.
 */
function getAverageAge(users) {
  let ageSum = users.reduce((a, b) => a + +b.age, 0);
  console.log(ageSum);
  console.log(users.length);
  let averageAge = ageSum / users.length;
  return averageAge;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr));
