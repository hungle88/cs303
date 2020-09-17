"use strict";

/* global truncate assert  */

describe("truncate", function() {
    it("truncate the long string to the given length (including the ellipsis)", function() {
      assert.equal(
        truncate("Hello this is a very very very very very very long string", 25),
        "Hello this is a very ver..."
      );
    });
  
    it("doesn't change short strings", function() {
      assert.equal(
        truncate("Hi everyone!", 20),
        "Hi everyone!"
      );
    });
  
  });