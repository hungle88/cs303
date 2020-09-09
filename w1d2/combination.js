'use strict';
/**
 * 
 * @param {array} arr is an array of words 
* @param {number} i is a number is used to filter words in array 
 * @return {array} an array of words longer than number i
 */
function filterLongWords(arr, i) {

let new_arr = arr.filter(n => n.length > i);

return new_arr;



}


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



