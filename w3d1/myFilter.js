"use strict";

function myMap(arr, func) {
let newArr = [];
for(let el of arr) {
    newArr.push(func(el));
}
return newArr;
}; 