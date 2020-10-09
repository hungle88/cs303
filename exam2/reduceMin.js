/* eslint-disable id-length */
"use strict";
{
  let testArr = [5, 44, 1, 33];

  let output = testArr.reduce((a, b) => (a > b ? b : a));

  console.log(output);
}

{
  let people = [
    { fullName: "John Smith", age: 10 },
    { fullName: "Pete Hunt", age: 20 },
  ];

  let output = people.reduce((a, b) => (a.age > b.age ? b : a));

  console.log(output);
}
