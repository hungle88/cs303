"use strict";

/* global Accumulator assert  */

describe("Accumulator", function () {
  context("when 2 entered", function () {
    beforeEach(function () {
      sinon.stub(window, "prompt");

      prompt.onCall(0).returns("2");
    });

    afterEach(function () {
      prompt.restore();
    });

    it("when 2 is entered the result is 3", function () {
      assert.equal(accumulator.read(), 3);
    });
  });
  context("when 3 entered", function () {
    beforeEach(function () {
      sinon.stub(window, "prompt");

      prompt.onCall(0).returns("3");
    });

    afterEach(function () {
      prompt.restore();
    });

    it("when 3 is entered the result is 6", function () {
      assert.equal(accumulator.read(), 6);
    });
  });
});
