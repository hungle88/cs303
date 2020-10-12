"use strict";
// function f(a, b) {
//   alert(a + b);
// }



// Function.prototype.defer = function(ms) {
//     return function(...args){
//     setTimeout( () => this.a + this.b, ms);
//     }
// }


// f.defer(1000)(1, 2); // shows 3 after 1 second

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    console.log( a + b);
  }
  
  f.defer(1000)(1, 2, 3); // shows 3 after 1 sec