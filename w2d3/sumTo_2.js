/* eslint-disable id-length */
"use strict";
/**Using a for loop
 *
 * @param {number} n is the input number.
 * @returns {numner} return sum from 1 to the input number.
 */
function sumTo(n){
    let sum = 0;

    for(let i = 0; i <= n; i++){
        sum+= i;
    }
return sum;

}





console.log(sumTo(100));