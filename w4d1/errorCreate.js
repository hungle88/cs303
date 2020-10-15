/* eslint-disable require-jsdoc */
/* eslint-disable strict */

//Error creating an instance ===> Fix it ==> Fixed 

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); 
console.log(rabbit.name);
