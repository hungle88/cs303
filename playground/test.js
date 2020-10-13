class Animal {
  constructor(name) {
  this.speed = 0;
  this.name = name;
  }
  run(speed) {
  this.speed += speed;
  alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
  this.speed = 0;
  alert(`${this.name} stands still.`);
  }}
  class Rabbit extends Animal {
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
      }
  hide() {
  alert(`${this.name} hides!`);
  }
  stop() {
  super.stop(); // call parent stop
  this.hide(); // and then hide
  }

ear(){
  alert("the ears are "+this.earLength + " inches!")
}}

  
   
  let rabbit = new Rabbit("White Rabit", 6);
  rabbit.run(5);
  rabbit.hide();
  rabbit.stop();
  rabbit.ear();