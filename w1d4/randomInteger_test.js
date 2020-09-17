// "use strict";
/* global randomInteger assert  */
describe("randomInteger", function () {
  it("the random integer is 2", function () {
    assert.equal(1, randomInteger(1, 5));
  });

  it("the random integer is 5", function () {
    assert.equal(2, randomInteger(5, 6));
  });

  it("the random integer is 8", function () {
    assert.equal(3, randomInteger(7, 8));
  });
  it("the random integer is 8", function () {
    assert.equal(4, randomInteger(7, 8));
  });
  it("the random integer is 8", function () {
    assert.equal(5, randomInteger(7, 8));
  });
});
