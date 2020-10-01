"use strict";
/**Output a single-linked list in the reverse order - Recursive solution
 * 
 * @param {object} list is a list of value.
 * @returns {number} value of the list.
 */
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
