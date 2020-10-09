"use strict";

function foo(bar, apple, banana) {
  if (bar < 100) return apple(bar);
  else return banana(bar);
}

console.log(foo(100, apple, banana));
console.log(foo(90, apple, banana));

function apple(n) {
  return n * 2;
}

function banana(n) {
  return n * 3;
}
