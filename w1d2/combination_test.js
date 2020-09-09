"use strict";
/* global filterLongWords assert  */
describe("filterLongWords", function () {

    it("words longer than 5 is morning afternoon", function () {
        let result = ["morning", "afternoon"];
        assert.equal(result, filterLongWords(["morning", "afternoon", "bye", "love"], 5));
    });

    it("words longer than 4 is apple", function () {
        assert.equal("apple", filterLongWords(["apple", "hi", "hey"], 4));
    });

    it("words longer than 3 is hello", function () {
        assert.equal("hello", filterLongWords(["hello", "bye", "hi"], 3));
    });


});

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
