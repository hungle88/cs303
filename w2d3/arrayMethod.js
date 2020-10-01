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

function findAge(arr) {
  return arr.find((n) => n.age > 10);
}

// function includeEven(arr) {
//   return arr.include(n % 2 === 0);
// }

function includeAge(arr) {
  return arr.include(age > 10);
}

function sumNumber(arr) {

  return arr.reduce((a, b) => a + b)
}

function averageNumber(arr) {
  return arr.reduce((a, b) => (a + b))/arr.length;
}
console.log(doubleNumber(numArray));
console.log(doubleAge(peopleArray));
console.log(evenNumber(numArray));
console.log(filterAge(peopleArray));
console.log(findEven(numArray));
console.log(findAge(peopleArray));
// console.log(includeEven(numArray));
// console.log(includeAge(peopleArray));
console.log(sumNumber(numArray));
console.log(averageNumber(numArray));