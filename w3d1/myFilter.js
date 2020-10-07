"use strict";

function myFilter(arr, func) {
let newArr = [];
for(let el of arr) {
    if(func){
    newArr.push(func(el));
}
}
return newArr;
}; 


function greatThanFive(num) {
    return num > 5;
}