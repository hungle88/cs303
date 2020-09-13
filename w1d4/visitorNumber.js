/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
"use strict";
const prompt = require("prompt-sync")();

let firstNum = +prompt("Please enter first number: ");
let secondNum = +prompt("Please enter second number: ");

let output = firstNum + secondNum;
console.log(output);
