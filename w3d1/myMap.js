"use strict";

function myMap(arr, func) {
  let newArr = [];
  for (let el of arr) {
    newArr.push(func(el));
  }
  return newArr;
}

let testArray = [1, 2, 3, 4, 5, 6];
let testArrayTwo = ["a", "b", "c", "d", "e", "f"];

function double(num) {
  return num * 2;
}

function upperCase(str) {
  return str.toUpperCase();
}
console.log(myMap(testArray, double));
console.log(myMap(testArrayTwo, upperCase));
