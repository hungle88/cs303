'use strict';
/**
 * 
 * @param {array} arr is an array of number

 * @return {number} sum of all the numbers in array
 */

function sum(arr) {
    let output = 0;
    for (let i = 0; i < arr.length; i++) {
        output += arr[i];

    }

    return output;


}


