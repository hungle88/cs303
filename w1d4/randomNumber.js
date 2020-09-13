"use strict";
/**
 * 
 * @param {number} min the minimum numnber 
 * @param {number} max the maximum number
 * 
 * @returns {number} the random floating-point number between min and max
 */
function randomNumber(min, max) {

let randomValue = max - min; //Value between min and max
let randomFloatingValue = Math.random() * randomValue; // random floating-point value between min and max
let output = min + randomFloatingValue; // random floating-point number start from min and is less than max
return output;
    
}


let rand =randomNumber(1, 5);
alert(rand);