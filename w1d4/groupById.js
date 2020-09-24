/* eslint-disable id-length */
"use strict";
/**
 * 
 * @param {array} arr is an array of users.
 * @returns {object} is an object of users. 
 */
function groupById(arr) {
  let newObj = arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
  return newObj;
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById);
