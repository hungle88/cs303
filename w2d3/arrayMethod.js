"use strict";

const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [
  { name: "Sam", age: 15 },
  { name: "William", age: 6 },
  { name: "Lucy", age: 13 },
  { name: "Barney", age: 80 },
];

function doubleNumber(arr) {
  return arr.map((n) => n * 2);
}

function doubleAge(arr) {
  let output = arr.map((item) => {
    let container = {};

    container.name = item.name;
    container.age = item.age * 2;

    return container;
  });

  return output;
}

function evenNumber(arr) {
  return arr.filter((n) => n % 2 === 0);
}

function filterAge(arr) {
  return arr.filter((n) => n.age > 10);
}

function findEven(arr) {
  return arr.find((n) => n % 2 === 0);
}






console.log(doubleAge(peopleArray));
console.log(doubleNumber(numArray));
console.log(evenNumber(numArray));
console.log(filterAge(peopleArray));
console.log(findEven(numArray));
