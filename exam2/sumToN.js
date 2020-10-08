"use strict";

// function sumToN(n) {
//   let sum = n + (n - 1);
//   n = n - 1;
//   if (n > 0) {
//     return sum + sumToN(n);
//   }
// }

function sumToN(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToN(n - 1);
}

console.log(sumToN(10));
