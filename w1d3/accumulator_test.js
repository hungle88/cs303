"use strict";

/* global Accumulator assert  */
describe("Accumulator", function () {
  context("when 2 entered", function () {
    beforeEach(function () {
      // eslint-disable-next-line no-undef
      sinon.stub(window, "prompt");

      prompt.onCall(0).returns("2");

      Accumulator.read();
    });

    afterEach(function () {
      prompt.restore();
    });

    it("the sum is 3", function () {
      assert.equal(Accumulator(1), 3);
    });
  });
});
