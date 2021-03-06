"use strict";
/**
 *
 * @param {number} startingValue is the beginning number that will be used to add to other later input numbers
 * @return {number} the total sum of the beginning number with all the input numbers
 */
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
   return this.value += +prompt("Please enter a number: ");
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
