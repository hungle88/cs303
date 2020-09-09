"use strict";

function isVowel(str) {
    // return ['a','e', "i", "o", "u"].includes(str);
    let arr = str.split("")
   for(let i = 0; i < arr.length; i++) {
if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {

    return true;
}

   }
   return false;
}

let str = "lv";
let output = isVowel(str);
console.log(output);