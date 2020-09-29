/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
/* eslint-disable id-length */
"use strict";
{
/**
 * 
 * @param {date} date is the input date
 * @returns {string} is the day of the week in EU countries.
 */
function getLocalDay(date) {
  let weekDay = date.getDay();

  let dayOfWeek = {
    7: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
  };

  for (let day in dayOfWeek) {
    if (dayOfWeek[day] === weekDay) {
      return day;
    }
  }
}

let date = new Date(2012, 0, 3);
console.log(getLocalDay(date));
describe("getLocalDay returns the \"european\" weekday", function() {
    it("3 January 2014 - friday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 3)), 5);
    });
  
    it("4 January 2014 - saturday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 4)), 6);
    });
  
    it("5 January 2014 - sunday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
    });
  
    it("6 January 2014 - monday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 6)), 1);
    });
  
    it("7 January 2014 - tuesday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 7)), 2);
    });
  
    it("8 January 2014 - wednesday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 8)), 3);
    });
  
    it("9 January 2014 - thursday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 9)), 4);
    });
  });
}