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


