"use strict";
/* global filterLongWords assert  */
describe("filterLongWords", function () {

    it("words longer than 5 are morning afternoon", function () {
        let result = ["morning", "afternoon"];
        assert.deepEqual(result, filterLongWords(["morning", "afternoon", "bye", "love"], 5));
    });

    it("words longer than 4 are apple orange", function () {
        let result = ["apple", "orange"];

        assert.deepEqual(result, filterLongWords(["apple", "orange", "hi", "hey"], 4));
    });

    it("words longer than 3 are hello goodbye", function () {
        let result = ["hello", "goodbye"];

        assert.deepEqual(result, filterLongWords(["hello", "goodbye", "bye", "hi"], 3));
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
