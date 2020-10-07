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


function even(num) {
    return num % 2 ==0;
}


let testArr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let output = myFilter(testArr, even);
console.log(output);