/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
"use strict";
{
/**
 *
 * @param {date} date is the starting date
 * @param {number} days is the number of days we want to count down.
 *
 * @returns {date} is the date days ago.
 */
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));

describe("getDateAgo", function() {

    it("1 day before 02.01.2015 -> day 1", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
    });
  
  
    it("2 days before 02.01.2015 -> day 31", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
    });
  
    it("100 days before 02.01.2015 -> day 24", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
    });
  
    it("365 days before 02.01.2015 -> day 2", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
    });
  
    it("does not modify the given date", function() {
      let date = new Date(2015, 0, 2);
      let dateCopy = new Date(date);
      getDateAgo(dateCopy, 100);
      assert.equal(date.getTime(), dateCopy.getTime());
    });
  
  });
}