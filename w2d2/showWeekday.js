/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
/* eslint-disable id-length */
"use strict";
{
/**
 * 
 * @param {date} date is the input date
 * @returns {string} is the day of the week.
 */
function getWeekDay(date) {
  let weekDay = date.getDay();

  let dayOfWeek = {
    SU: 0,
    MO: 1,
    TU: 2,
    WE: 3,
    TH: 4,
    FR: 5,
    SA: 6,
  };

  for (let day in dayOfWeek) {
    if (dayOfWeek[day] === weekDay) {
      return day;
    }
  }
}

let date = new Date(2012, 0, 3);
console.log(getWeekDay(date));

describe("getWeekDay", function() {
    it("3 January 2014 - friday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 3)), 'FR');
    });
  
    it("4 January 2014 - saturday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 4)), 'SA');
    });
  
    it("5 January 2014 - sunday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 5)), 'SU');
    });
  
    it("6 January 2014 - monday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 6)), 'MO');
    });
  
    it("7 January 2014 - tuesday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 7)), 'TU');
    });
  
    it("8 January 2014 - wednesday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 8)), 'WE');
    });
  
    it("9 January 2014 - thursday", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 9)), 'TH');
    });
  });
}