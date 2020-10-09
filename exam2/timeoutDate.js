/* eslint-disable require-jsdoc */
"use strict";

function tenClock() {
  let second = 0;
  setTimeout(function now() {
    let date = new Date();
    console.log(
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    );
    second++;
    let timer = setTimeout(now, 1000);
    if (second > 10) {
      clearTimeout(timer);
    }
  }, 1000);
}

tenClock();