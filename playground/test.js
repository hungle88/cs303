// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
  
// }

// const myCounter = makeCounter();

// console.log(myCounter());
function makeCounter() {

let counters = [];

let i = 0;
while (i < 10) {
    let j = i;
    let counter = function() { 
      console.log( j ); 
    };
  counters.push(counter);
  i++;
}

return counters;
}

let counter = makeCounter();