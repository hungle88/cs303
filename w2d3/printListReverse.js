"use strict";

// function printListReverse(list) {
//   let arr = [];
//   let temp = list;

//   while (temp) {
//     arr.unshift(temp.value);
//     temp = temp.next;
//   }
//   for (let number of arr) {
//     console.log(number);
//   }
// }

function printListReverse(list) {
  if (list.next) {
    printListReverse(list.next);
  }

  console.log(list.value);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printListReverse(list);
