"use strict";

let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [john, pete];

let output = people.map((el) => ({
  fullName: el.name + " " + el.surname,
  age: el.age,
}));

console.log(output);
