/* eslint-disable id-length */
"use strict";
/**
 * 
 * @param {array} arr is an array of username.
 * @return {array} is a array of username sorted by age.
 */
function sortByAge(arr) {
  let sorted = arr.sort((a, b) => a.age - b.age);
  return sorted;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

console.log(arr[0].name); 
console.log(arr[1].name); 
console.log(arr[2].name); 

