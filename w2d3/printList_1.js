"use strict";
/**Recursive solution
 * 
 * @param {object} list is a list of value.
 * @returns {number} value of the list.
 */
function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
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

printList(list);
