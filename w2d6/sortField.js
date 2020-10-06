/* eslint-disable no-undef */
/* eslint-disable id-length */
"use strict";
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  /**
   *
   * @param {string} fieldName is the property name of the object
   * @returns {undefined} nothing
   */
  function byField(fieldName) {
    return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
  }

  console.log(users.sort(byField("name")));
  console.log(users.sort(byField("age")));

