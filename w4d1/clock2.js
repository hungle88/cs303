"use strict";

class Clock {
  constructor(time) {
    this.time = time;
  }

  start() {
    let counter = 0;

    let timer = setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      if (hours < 10) return 0 + hours;
      if (minutes < 10) return 0 + minutes;
      if (seconds < 10) return 0 + seconds;

      let time = hours + ":" + minutes + ":" + seconds;
      console.log(time);
      counter++;
      if (counter === 10) clearInterval(timer);
    }, 1000);
  }
}

let clock = new Clock();
clock.start();
