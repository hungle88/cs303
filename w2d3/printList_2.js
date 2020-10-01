"use strict";
/**Loop-based solution
 * 
 * @param {object} list is a list of value.
 * @returns {number} value of the list.
 */
function printList(list){
let temp = list;
while(temp) {
    console.log(temp.value);
    temp = temp.next;
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
          next: null
        }
      }
    }
  };

  printList(list);