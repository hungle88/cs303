"use strict";
/* global maxOfThree assert  */
describe("maxOfThree", function() {

    it("max of 2 5 -1 is 5", function() {
      assert.equal(5, maxOfThree(2, 5, -1));
    });

    it("max of 1 2 3 is 3", function() {
        assert.equal(3, maxOfThree(1, 2, 3));
      });

      it("max of 9 8 7 is 9", function() {
        assert.equal(9, maxOfThree(9, 8, 7));
      });
  
 
  
  });