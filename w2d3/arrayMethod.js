/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
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

function sumNumber(arr) {
  return arr.reduce((a, b) => a + b);
}

function averageNumber(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

function maxNum(arr) {
  return arr.reduce((a, b) => Math.max(a, b));
}

function maxAge(arr) {
  return arr.reduce((a, b) => (a.age > b.age ? a : b));
}

function ageValue(arr) {
  return arr.age;
}

function odd(num) {
  if (num % 2 !== 0) return num;
}

function even(num) {
  if (num % 2 === 0) return num;
}


function oddCounter(arr) {
  let ageArr = arr.map(ageValue);
  let oddArr = [];
  let j = 0;
  for (let i = 0; i < ageArr.length; i++) {
    if (ageArr[i] % 2 !== 0) {
      oddArr[j] = ageArr[i];
      j++;
    }
  }
  return oddArr.length;
}

function evenCounter(arr) {
  let ageArr = arr.map(ageValue);
  let evenArr = [];
  let j = 0;
  for (let i = 0; i < ageArr.length; i++) {
    if (ageArr[i] % 2 !== 0) {
      evenArr[j] = ageArr[i];
      j++;
    }
  }
  return evenArr.length;
}

function sum(a, b) {
  return a + b;
}

console.log(doubleNumber(numArray));
console.log(doubleAge(peopleArray));
console.log(evenNumber(numArray));
console.log(filterAge(peopleArray));
console.log(findEven(numArray));
console.log(findAge(peopleArray));

console.log(sumNumber(numArray));
console.log(averageNumber(numArray));
console.log(maxNum(numArray));
console.log(maxAge(peopleArray));


console.log(peopleArray.map(ageValue).filter(odd).reduce(sum)/oddCounter(peopleArray));
console.log(peopleArray.map(ageValue).filter(even).reduce(sum)/evenCounter(peopleArray));
