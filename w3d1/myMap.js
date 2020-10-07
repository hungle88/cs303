"use strict";

function myMap(arr, func) {
let newArr = [];
for(let el of arr) {
    newArr.push(func(el));
}
return newArr;
}; 



let testArray = [1, 2, 3, 4, 5, 6];

let output = myMap(testArray, double);

console.log(output);

function double(num) {
    return num * 2;
}