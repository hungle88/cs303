"use strict";

function printNumbers(from, to) {
  let n = from;
  setTimeout(function run() {
    console.log(n);
    n++;
    let timer = setTimeout(run, 1000);
    if(n === to){
        clearTimeout(timer);
    }
  }, 1000);
}

printNumbers(1, 5);