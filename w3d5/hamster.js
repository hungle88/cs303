"use strict";

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [], //create a stomach property inside speedy
  __proto__: hamster,
};

let lazy = {
  stomach: [], //create a stomach property inside lazy
  __proto__: hamster,
};

speedy.eat("apple");
console.log(speedy.stomach);

console.log(lazy.stomach);
