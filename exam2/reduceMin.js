/* eslint-disable id-length */
"use strict";
{
  let testArr = [1, 2, 3, 4, 5];

  // let output = testArr.reduce((a, b) => {
  //   if (a < b) {
  //     b = a;
  //     return b;
  //   }
  // });

  let output = testArr.reduce((a, b) => a > b ? b : a);


  console.log(output);
}

{
  let people = [
    { name: "a", age: 10 },
    { name: "b", age: 12 },
    { name: "c", age: 7 },
  ];

  let output = people.reduce((a, b) => a.age > b.age ? b : a);

// let output = people.reduce((a, b) => {
//     if (a.age < b.age) {
//       b.age = a.age;
//       return b;
//     }
//   });


  console.log(output);
}
