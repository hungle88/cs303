"use strict";
// function makeCounter() {
//     let count = 0;

//     return function() {
//       return ++count;
//     };
//   }

//   let counter = makeCounter();
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());
// console.log(makeCounter);

// let x = 1;
// function func() {
//   console.log(x);
//   x = 2;
// }
// fun();
// func();

// function sayHi() {
//   console.log('Hello');
//   }
//   setTimeout(sayHi, 10000);

function stopWatch(startTime){
  let currentTime = startTime;
  const watchId = setInterval(logTime, 1000);


  function logTime() {

    console.log(currentTime);
    if(currentTime === 0) {
      clearInterval(watchId);
      // break;
    } else {

      currentTime = currentTime - 1;
    }
  }
}

stopWatch(6);