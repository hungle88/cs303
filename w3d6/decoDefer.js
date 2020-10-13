"use strict";

Function.prototype.defer = function (ms) {
//   let f = this;
  return function (...args) {
    setTimeout((this, args), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2, 3);
