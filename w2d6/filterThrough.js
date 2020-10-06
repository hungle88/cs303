/* eslint-disable id-length */
"use strict";

  /**
   *
   * @param {number} a is min value
   * @param {number} b is max value
   * @return {number} numbers between a and b
   */
  function inBetween(a, b) {
    return function (n) {
      return n >= a && n <= b;
    };
  }

  console.log(arr.filter(inBetween(3, 6)));



  /**
   *
   * @param {array} arr is an array of number
   * @return {array} is the filtered array
   */
  function inArray(arr) {
    return function (n) {
      return arr.includes(n);
    };
  }
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(arr.filter(inArray([1, 2, 10])));


