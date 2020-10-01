"use strict";
/**Output a single-linked list in the reverse order - Loop-based solution
 *
 * @param {object} list is a list of value.
 * @returns {number} value of the list.
 */
function printListReverse(list) {
  let arr = [];
  let temp = list;

  while (temp) {
    arr.unshift(temp.value);
    temp = temp.next;
  }
  for (let number of arr) {
    console.log(number);
  }
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
