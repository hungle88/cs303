"use strict";

function f() {
  console("Hello!");
}

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

f.defer(1000); 
