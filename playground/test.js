function Person(name) {
  console.log(this);
  this.name = name;
  console.log(this);
}

function Doctor(name, dept) {
  console.log(this);
  Person.call(this, name, dept);
  console.log(this);
  this.dept = dept;
  console.log(this);
}

Doctor.__proto__.report = function () {
  console.log("I'm going to die");
};

function Surgeon(name, dept) {
  console.log(this);
  Doctor.call(this, name, dept);
  console.log(this);
  this.dept = dept;
  console.log(this);
}

Surgeon.__proto__.operate = function () {
  console.log("HAHAHAHAHAHA");
};

let surg1 = new Surgeon("Hung", "killer");
surg1.operate();
console.log(surg1);
console.log(surg1.prototype);