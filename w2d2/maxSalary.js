/* eslint-disable no-inner-declarations */
"use strict";
{
/**
 * 
 * @param {object} obj is the object with name and salary.
 * @returns {string} the name of the person who has highest salary. 
 */
function topSalary(obj) {
  let maxSalary = 0;
  let topGuy = null;
  for (let [name, salary] of Object.entries(obj)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topGuy = name;
    }
  }
  return topGuy;
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
let output = topSalary(salaries);
console.log(output);

describe("topSalary", function() {
    it("returns top-paid person", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      assert.equal( topSalary(salaries), "Pete" );
    });
  
    it("returns null for the empty object", function() {
      assert.isNull( topSalary({}) );
    });
  });
}
