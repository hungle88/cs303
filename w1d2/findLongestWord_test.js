"use strict";
/* global findTheLongestWord assert  */
describe("findTheLongestWord", function () {

    it("max of [hi hello bye] is 5", function () {
        assert.equal(5, findLongestWord(["hi", "hello", "bye"]));
    });
    it("max of [one five two] is 4", function () {
        assert.equal(4, findLongestWord(["one", "five", "two"]));
    });
    it("max of [morning night noon] is 7", function () {
        assert.equal(7, findLongestWord(["morning", "night", "noon"]));
    });



});

