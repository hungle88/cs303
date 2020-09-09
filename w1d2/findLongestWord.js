'use strict';
/**
 * 
 * @param {array} arr is an array

 * @return {number} the longest length of the values in the array
 */

function findLongestWord(arr) {
    let word_length_arr = arr.map(n =>n.length);
    return Math.max(...word_length_arr);
    
    }
    