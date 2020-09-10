"use strict";
/**Ask the user to enter 2 numbers. This function will sum the first and second number, then multiply the first number by the second number.
 *
 *@return {number} the result of sum and product.
 */
function Calculator() {
  this.read = function () {
    this.firstNum = +prompt("Please enter first number: ");
    this.secondNum = +prompt("Please enter second number: ");
  };

  this.sum = function () {
    return this.firstNum + this.secondNum;
  };

  this.multiply = function () {
    return this.firstNum * this.secondNum;
  };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.multiply());
