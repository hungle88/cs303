"use strict";

function printNumbers(from, to) {
  let n = from;
  let timer = setInterval(function () {
    console.log(n);
    if (n === to) {
      clearInterval(timer);
    }
    n++;
  }, 1000);
  if (timer === to) {
    clearInterval(timer);
  }
}

printNumbers(1, 5);
