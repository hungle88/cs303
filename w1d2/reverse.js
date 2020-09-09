'use strict';
/**
 * 
 * @param {string} str is a word or a phrase

 * @return {string} a reversed word or a reversed phrase
 */

function reverse(str) {
   let arr = str.split("");
   let j = 0;
   let reverse_arr =[];
for(let i = arr.length-1; i >= 0; i--){

reverse_arr[j] = arr[i];
j++;

}
    
return reverse_arr.join("");


}



