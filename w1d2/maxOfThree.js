'use strict';
/**
 * 
 * @param {number} num_1 is first number 
 * @param {number} num_2 is second number
 * @param {number} num_3 is 3rd number
 * @return {number} largest
 */

function maxOfThree(num_1, num_2, num_3) {

    let arr=[];
    arr.push(+num_1);
    arr.push(+num_2);
    arr.push(+num_3);
    return Math.max(...arr);
    
    }
    

    