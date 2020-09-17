"use strict";

/* global Accumulator assert  */
// describe("Accumulator", function () {
//   context("when 2 entered", function () {
//     beforeEach(function () {
//       sinon.stub(window, "prompt");

//       prompt.onCall(1).returns("3");

//       Accumulator.read();
//     });

//     afterEach(function () {
//       prompt.restore();
//     });

//     it("When the starting value is 1 the sum is 3", function () {
//       assert.equal(Accumulator.sum(), 3);
//     });
//   });
// });

describe("Accumulator", function () {
  context("when 2 entered", function () {
    beforeEach(function () {
      sinon.stub(window, "prompt");

      prompt.onCall(0).returns("2");

      accumulator.read();
    });

    afterEach(function () {
      prompt.restore();
    });

    it("the sum is 3", function () {
      assert.equal(accumulator.read(1), 3);
    });

  });
});

// describe("calculator", function () {
//   context("when 2 and 3 entered", function () {
//     beforeEach(function () {
//       sinon.stub(window, "prompt");

//       prompt.onCall(0).returns("2");
//       prompt.onCall(1).returns("3");

//       calculator.read();
//     });

//     afterEach(function () {
//       prompt.restore();
//     });

//     it("the sum is 5", function () {
//       assert.equal(calculator.sum(), 5);
//     });

//     it("the multiplication product is 6", function () {
//       assert.equal(calculator.mul(), 6);
//     });
//   });
// });
