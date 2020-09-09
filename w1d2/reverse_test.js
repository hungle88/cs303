"use strict";
/* global maxOfThree assert  */
describe("reverse", function() {

    it("reverse of love is evol", function() {
      assert.equal("evol", reverse("love"));
    });
    
    it("reverse of night is thgin", function() {
        assert.equal("thgin", reverse("night"));
      });
    
    it("reverse of race is ecar", function() {
        assert.equal("ecar", reverse("race"));
      });  
 
  
  });