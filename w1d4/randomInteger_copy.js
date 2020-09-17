"use strict";
/**
 * 
 * @param {number} min the minimum numnber 
 * @param {number} max the maximum number
 * 
 * @returns {number} the random integer number between min and max
 */
function randomInteger(min, max) {

let randomValue = max +1 - min; //Value between min and max + 1
let randomFloatingValue = Math.random() * randomValue; // random floating-point value between min and max + 1
let output = Math.round(min - 0.5 + randomFloatingValue); // random integer number start from min and is less than max
return output;
    
}


