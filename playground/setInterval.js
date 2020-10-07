"use strict";

function printList(min, max) {
  let n = min;
  let timer = setInterval(function () {
    console.log(n);
    
    if (n === max) {
      clearInterval(timer);
    };
    n++;
  }, 1000);
  if (n === max) {
    clearInterval(timer);
  }
}

printList(1, 5);