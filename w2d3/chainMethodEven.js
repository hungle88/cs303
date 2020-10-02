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
     *
     * @param {array} arr is an array of objects.
     * @returns {number} the amount of even age value.
     */
    function evenCounter(arr) {
      let ageArr = arr.map(ageValue);
      let evenArr = [];
      let j = 0;
      for (let i = 0; i < ageArr.length; i++) {
        if (ageArr[i] % 2 === 0) {
          evenArr[j] = ageArr[i];
          j++;
        }
      }
      return evenArr.length;
    }

    /**
     *
     * @param {number} a is the first number
     * @param {number} b  is the second number
     * @returns {number} the sum of a and b
     */
    function sum(a, b) {
      return a + b;
    }





    return arr.map(ageValue).filter(even).reduce(sum, 0) / evenCounter(arr);//using the chain of map filter reduce to find the average age of people with even ages
  


}

  console.log(chainMethodEven(peopleArray));

  /* global chainMethod assert  */

  describe("chainMethodEven", function () {
    it("return the average age of even age values = 43", function () {
      let arr = [{ name: "a", age: 15 }, { name: "b", age: 6 }, { name: "c", age: 13 }, {name: "d", age: 80 }];

      let output = chainMethodEven(arr);
      assert.equal(output, 43);
    });
  });
}
