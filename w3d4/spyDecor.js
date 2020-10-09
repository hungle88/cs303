"use strict";

function work(a, b) {
  console.log(a + b);
}

work = spy(work);

work(1, 2);
work(4, 5);
work(2, 3);
work(2, 6);

for (let arr of work.calls) {
  console.log("call:" + arr.join());
}

function spy(func) {
  function wrapper(...arr) {
    wrapper.calls.push(arr);
    console.log(wrapper.calls);

    return func.apply(this, arr);
  }

  wrapper.calls = [];
  return wrapper;
}
