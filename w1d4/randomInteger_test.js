// "use strict";
/* global randomInteger assert  */
describe("randomInteger", function () {
  it("the random integer is 1", function () {
    assert.equal(1, randomInteger(1, 3));
  });

  it("the random integer is 2", function () {
    assert.equal(2, randomInteger(1, 3));
  });

  it("the random integer is 3", function () {
    assert.equal(3, randomInteger(1, 3));
  });
});
