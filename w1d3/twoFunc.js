/* eslint-disable id-length */
"use strict";

let obj ={};

/**
 * @returns {object} an object.
 */
function A() {
    return obj;

}
/**
 * @returns {object} an object.
 */
function B() {
    return obj;

}

let a = new A;
let b = new B;

console.log(a == b);