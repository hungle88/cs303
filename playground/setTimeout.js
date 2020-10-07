"use strict";

// function printList(min, max) {
//   let n = min;
//   setTimeout(function count() {
//     console.log(n);

//     let timer = setTimeout(count, 1000);
//     if (n === max) {
//       clearTimeout(timer);
//     }
//     n++;
//   }, 1000);
// }

printList(1, 5);

function printList(from, to) {
    let n = from;
    setTimeout(function count() {
      console.log(n);
      n++;
      let timer = setTimeout(count, 1000);
      if(n === to){
          clearTimeout(timer);
      }
    }, 1000);
  }
