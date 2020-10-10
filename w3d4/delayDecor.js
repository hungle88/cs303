/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";

function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f2000 = delay(f, 2000);
let f5000 = delay(f, 5000);

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

f1000("1 second");
f2000("2 seconds");
f5000("5 seconds");
