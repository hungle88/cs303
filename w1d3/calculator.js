"use strict";
/**Ask the user to enter 2 numbers. This function will sum the first and second number, then multiply the first number by the second number.
 *
 *@return {number} the result of sum and product.
 */

let calculator = {
  /**
   * Ask user to enter 2 numbers.
   * @return {number} remember 2 numbers.
   */
  read: function () {
    this.firstNum = +prompt("Please enter first number: ");
    this.secondNum = +prompt("Please enter second number: ");
  },

  /** Sum of 2 numbers.
   * @return {number} the sum of 2 numbers.
   */
  sum: function () {
    return this.firstNum + this.secondNum;
  },
  /** Product of 2 numbers.
   * @return {number} the product of 2 numbers.
   */
  multiply: function () {
    return this.firstNum * this.secondNum;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.multiply());
