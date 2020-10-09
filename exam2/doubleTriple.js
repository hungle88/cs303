/* eslint-disable require-jsdoc */
/* eslint-disable id-length */
"use strict";

function foo(bar, apple, banana) {
  if (bar < 100) return apple(bar);
  else return banana(bar);
}

function apple(n) {
  return n * 2;
}

function banana(n) {
  return n * 3;
}

console.log(foo(100, apple, banana));
console.log(foo(90, apple, banana));
