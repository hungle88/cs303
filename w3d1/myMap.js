/* eslint-disable id-length */
"use strict";
/**
 * 
 * @param {array} arr is an array of value
 * @param {function} func is the callback function
 * @returns {array} is the mapped array
 */
function myMap(arr, func) {
  let newArr = [];
  for (let el of arr) {
    newArr.push(func(el));
  }
  return newArr;
}

let testArray = [1, 2, 3, 4, 5, 6];
let testArrayTwo = ["a", "b", "c", "d", "e", "f"];
/**
 * 
 * @param {number} num is a number need to be doubled
 * @returns {number} the doubled number
 */
function double(num) {
  return num * 2;
}

/**
 * 
 * @param {string} str is a string value
 * @returns {string} is the upper-cased string value
 */
function upperCase(str) {
  return str.toUpperCase();
}
console.log(myMap(testArray, double));
console.log(myMap(testArrayTwo, upperCase));
