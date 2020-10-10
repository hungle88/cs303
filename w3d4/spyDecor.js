/* eslint-disable no-func-assign */
/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
"use strict";

function work(a, b) {
  console.log(a + b);
}

work = spy(work);

work(1, 2);
work(4, 5);
work(2, 3);
work(2, 6);

for (let arg of work.calls) {
  console.log("call:" + arg.join());
}

function spy(func) {
  function wrapper(...arg) {
    wrapper.calls.push(arg);
    console.log(wrapper.calls);

    return func.apply(this, arg);
  }

  wrapper.calls = [];
  return wrapper;
}
