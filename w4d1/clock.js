"use strict";

class Clock {
  constructor(time) {
    this.time = "h:m:s";
  }

  run() {
    // let counter = 0;
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) return 0 + hours;
    if (minutes < 10) return 0 + minutes;
    if (seconds < 10) return 0 + seconds;

    let time = hours + ":" + minutes + ":" + seconds;
    console.log(time);
  }

  start() {
    let counter = 0;
    this.timer = setInterval(() => {
      this.run();
      counter++;
      if (counter === 10) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

let clock = new Clock("h:m:s");
clock.start();
