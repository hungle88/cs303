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
   * @returns {number} the avrage age of odd age value.
   */
  function chainMethodOdd(arr) {
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
     * @returns {number} the odd age values.
     */
    function odd(num) {
      if (num % 2 !== 0) return num;
    }

    /**
     * calculate the average value
     * @param  {...any} arr 
     */
    function average(...arr) {
      let newArr = [...arr];
      console.log(newArr);
      return (
        newArr[newArr.length - 1].reduce((a, b) => a + b) /
        newArr[newArr.length - 1].length
      );
    }

    return arr.map(ageValue).filter(odd).reduce(average); //using the chain of map filter reduce to find the average age of people with odd ages
  }

  console.log(chainMethodOdd(peopleArray));

  /* global chainMethod assert  */

  describe("chainMethodOdd", function () {
    it("return the average age of odd age values = 14", function () {
      let arr = [
        { name: "a", age: 15 },
        { name: "b", age: 6 },
        { name: "c", age: 13 },
        { name: "d", age: 80 },
      ];

      let output = chainMethodOdd(arr);
      assert.equal(output, 14);
    });

    it("return the average age of odd age values = 13", function () {
      let arr = [
        { name: "a", age: 15 },
        { name: "b", age: 6 },
        { name: "c", age: 13 },
        { name: "d", age: 80 },
        { name: "e", age: 11 },
      ];

      let output = chainMethodOdd(arr);
      assert.equal(output, 13);
    });
  });
}
