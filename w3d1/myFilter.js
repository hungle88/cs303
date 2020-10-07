/* eslint-disable id-length */
"use strict";
/**
 * 
 * @param {array} arr is an array of value
 * @param {function} func is the callback function
 * @returns {array} is the filtered array
 */
function myFilter(arr, func) {
  let newArr = [];
  for (let el of arr) {
    if (func(el)) {
      newArr.push(el);
    }
  }
  return newArr;
}

/**
 * 
 * @param {number} num is a number 
 * @returns {boolean} even numbers or not
 */
function even(num) {
  return num % 2 === 0;
}

/**
 * 
 * @param {number} num is a number
 * @returns {boolean} odd numbers or not
 */
function odd(num) {
  return num % 2 !== 0;
}

/**
 * 
 * @param {number} num is a number
 * @returns {boolean} number greater than 5 nor not
 */
function greaterThanFive(num) {
  return num > 5;
}
let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myFilter(testArr, even));
console.log(myFilter(testArr, odd));
console.log(myFilter(testArr, greaterThanFive));
