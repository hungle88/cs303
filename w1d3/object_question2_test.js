"use strict";
/* global assert isEmpty*/
describe("isEmpty", function () {

    it("this object is empty", function () {
        assert.equal(isEmpty({}), true);
    });

});