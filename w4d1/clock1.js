"use strict";
//Rewrite to class.

class Clock {
  constructor(time) {
    this.time = time;
  }

  run() {
    if (this.time === "h:m:s") {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      if (hours < 10) return 0 + hours;
      if (minutes < 10) return 0 + minutes;
      if (seconds < 10) return 0 + seconds;

      console.log(hours + ":" + minutes + ":" + seconds);
    } else return null;
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
