/* eslint-disable id-length */
"use strict";
let ladder = {
  step: 0,
  /**
   * @return {number} up 1 step.
   */
  up() {
    this.step++;
    return this;
  },
  /**
   * @return {number} down 1 step.
   */
  down() {
    this.step--;
    return this;
  },
  /**
   * @return {number} show the current step.
   */
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();
