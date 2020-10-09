"use strict";

function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
work(2, 3); // 5
work(2, 6); //8

for (let arr of work.calls) {
  console.log("call:" + arr.join()); // "call:1,2", "call:4,5"
}

function spy(func) {
  function wrapper(...arr) {
    // using ...arr instead of arguments to store "real" array in wrapper.calls
    wrapper.calls.push(arr);
    console.log(wrapper.calls);

    return func.apply(this, arr);
  }

  wrapper.calls = [];
  return wrapper;
}
