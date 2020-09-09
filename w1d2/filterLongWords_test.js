"use strict";
/* global filterLongWords assert  */
describe("filterLongWords", function () {

    it("words longer than 5 is morning", function () {
        assert.equal(["morning", "afternoon"], filterLongWords(["morning", "afternoon", "bye", "love"], 5));
    });

    it("words longer than 4 is apple", function () {
        assert.equal("apple", filterLongWords(["apple", "hi", "hey"], 4));
    });

    it("words longer than 3 is hello", function () {
        assert.equal("hello", filterLongWords(["hello", "bye", "hi"], 3));
    });


});