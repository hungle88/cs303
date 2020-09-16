/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";
function wordsCount(str) {
  let strLength = str.split(" ");
  let wordLength = strLength.map(n => n.length);
  let maxLength = Math.max(...wordLength);
  console.log(maxLength);
  console.log(wordLength);
let output = [];
 
for(let i = 0; i <= maxLength; i++){
let counter = 0;
for(let j = 0; j < wordLength.length; j++){
    if(wordLength[j] === i){
        counter++;
    }
}

output[i] = counter;
}

return output;
}

let str ="a bb ccc ccc dddd";
console.log(wordsCount(str));