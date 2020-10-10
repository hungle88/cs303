"use strict";
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head,
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed,
  };

  console.log(pockets.pen);
  console.log(bed.glasses);
  console.log(pockets.glasses);

  //Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

  console.log("Question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.");
  console.log("Answer: There is no difference");