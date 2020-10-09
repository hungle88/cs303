// "use strict";
// // function makeCounter() {
// //     let count = 0;

// //     return function() {
// //       return ++count;
// //     };
// //   }

// //   let counter = makeCounter();
// //   console.log(counter());
// //   console.log(counter());
// //   console.log(counter());
// //   console.log(counter());
// //   console.log(counter());
// // console.log(makeCounter);

// // let x = 1;
// // function func() {
// //   console.log(x);
// //   x = 2;
// // }
// // fun();
// // func();

// // function sayHi() {
// //   console.log('Hello');
// //   }
// //   setTimeout(sayHi, 10000);

// function stopWatch(startTime){
//   let currentTime = startTime;
//   const watchId = setInterval(logTime, 1000);

//   function logTime() {

//     console.log(currentTime);
//     if(currentTime === 0) {
//       clearInterval(watchId);
//       // break;
//     } else {

//       currentTime = currentTime - 1;
//     }
//   }
// }

// stopWatch(6);

// {
//   function greeting(lang) {
//     console.log(`${lang}: I am ${this.name}`);
//   }
//   const john = {
//     name: "John",
//   };
//   const jane = {
//     name: "Jane",
//   };
//   const greetingJohn = greeting.bind(john, "en");
//   greetingJohn();
//   const greetingJane = greeting.bind(jane, "es");
//   greetingJane();
// }
{
  function greet(greeting) {
    console.log(
      `${greeting}, I am ${this.name} and I am ${this.age} years old`
    );
  }
  const john = {
    name: "John",
    age: 24,
  };
  const jane = {
    name: "Jane",
    age: 22,
  };
  // Hi, I am John and I am 24 years old
  greet.call(john, "Hi");
  // Hi, I am Jane and I am 22 years old
  greet.call(jane, "Hello");
}

// {
//   function greet(greeting, lang) {
//     console.log(lang);
//     console.log(
//       `${greeting}, I am ${this.name} and I am ${this.age} years old`
//     );
//   }
//   const john = {
//     name: "John",
//     age: 24,
//   };
//   const jane = {
//     name: "Jane",
//     age: 22,
//   };
//   // Hi, I am John and I am 24 years old
//   greet.apply(john, ["Hi", "en"]);
//   // Hi, I am Jane and I am 22 years old
//   greet.apply(jane, ["Hola", "es"]);
// }
