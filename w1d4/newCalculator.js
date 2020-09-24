/* eslint-disable id-length */
"use strict";
/**
 * This is  an "extendable" calculator objects.
 * @return {number} the result of the calculation.
 */
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let strArr = str.split(" ");
    let a = +strArr[0];
    let op = strArr[1];
    let b = +strArr[2];

    if (!this.methods[op] || !isFinite(a) || !isFinite(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => Math.pow(a, b));

let result = powerCalc.calculate("2 ** 3");
console.log(result);
