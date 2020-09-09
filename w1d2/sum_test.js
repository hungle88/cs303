"use strict";
/* global sum assert  */
describe("sum", function () {

    it("sum of [1, 2, 3] is 6", function () {
        assert.equal(6, sum([1, 2, 3]));
    });

    it("sum of [4, 5, 6] is 15", function () {
        assert.equal(15, sum([4, 5, 6]));
    });

    it("sum of [2, 4, 6] is 12", function () {
        assert.equal(12, sum([2, 4, 6]));
    });



});