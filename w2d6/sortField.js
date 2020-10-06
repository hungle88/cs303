/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
/* eslint-disable id-length */
"use strict";
{
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

  describe("byField", function(){

    let users = [
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
    ];
  
    it("sorts users by name", function(){
      let nameSortedKey = [
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
        { name: "Pete", age: 18, surname: "Peterson" },
      ];
      let nameSortedAnswer = users.sort(byField("name"));
      assert.deepEqual(nameSortedKey, nameSortedAnswer);
    });
  
    it("sorts users by age", function(){
      let ageSortedKey = [
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
      ];
      let ageSortedAnswer = users.sort(byField("age"));
      assert.deepEqual(ageSortedKey, ageSortedKey);
    });
  
    it("sorts users by surname", function(){
      let surnameSortedKey = [
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
        { name: "Pete", age: 18, surname: "Peterson" },
      ];
      let surnameSortedAnswer = users.sort(byField("surname"));
      assert.deepEqual(surnameSortedAnswer, surnameSortedKey);
    });
  
  });

}