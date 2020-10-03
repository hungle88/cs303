/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable valid-jsdoc */
/* eslint-disable id-length */
"use strict";
{
  const peopleArray = [
    { name: "Sam", age: 15 },
    { name: "William", age: 6 },
    { name: "Lucy", age: 13 },
    { name: "Barney", age: 80 },
  ];

  /**
   *
   * @param {array} arr is an array of object
   * @returns {number} the average age of even age value.
   */
  function chainMethodEven(arr) {
    /**
     *
     * @param {array} arr is an array of objects.
     * @returns {number} the age values inside the objects in the array.
     */
    function ageValue(arr) {
      return arr.age;
    }

    /**
     *
     * @param {number} num is the age value inside the objects in the array.
     * @returns {number} the even age values.
     */
    function even(num) {
      if (num % 2 === 0) return num;
    }
    /**
     * calculate the average value
     * @param  {...any} arr
     */
    function average(...arr) {
      console.log(arr);
      let newArr = arr.pop();
      console.log(newArr);
      return newArr.reduce((a, b) => a + b) / newArr.length;
    }

    return arr.map(ageValue).filter(even).reduce(average, 0); //using the chain of map filter reduce to find the average age of people with even ages
  }

  console.log(chainMethodEven(peopleArray));

  /* global chainMethodEven assert  */

  describe("chainMethodEven", function () {
    it("return the average age of even age values = 43", function () {
      let arr = [
        { name: "a", age: 15 },
        { name: "b", age: 6 },
        { name: "c", age: 13 },
        { name: "d", age: 80 },
      ];

      let output = chainMethodEven(arr);
      assert.equal(output, 43);
    });
    it("return the average age of even age values = 36", function () {
      let arr = [
        { name: "a", age: 15 },
        { name: "b", age: 6 },
        { name: "c", age: 13 },
        { name: "d", age: 80 },
        { name: "e", age: 22 },
      ];

      let output = chainMethodEven(arr);
      assert.equal(output, 36);
    });

    it("return the average age of even age values = 28", function () {
      let arr = [
        { name: "a", age: 15 },
        { name: "b", age: 6 },
        { name: "c", age: 13 },
        { name: "d", age: 80 },
        { name: "e", age: 22 },
        { name: "f", age: 4 },
      ];

      let output = chainMethodEven(arr);
      assert.equal(output, 28);
    });
    it("return the average age of even age values = 25.2", function () {
      let arr = [
        { name: "a", age: 15 },
        { name: "b", age: 6 },
        { name: "c", age: 13 },
        { name: "d", age: 80 },
        { name: "e", age: 22 },
        { name: "f", age: 4 },
        { name: "f", age: 14 },
      ];

      let output = chainMethodEven(arr);
      assert.equal(output, 25.2);
    });
  });
}
