/* eslint-disable no-inner-declarations */
/* eslint-disable id-length */
"use strict";
{
  //Write code to illustrate the use of the rest operator in a destructurng assignment
  let a;
  let b;
  let rest;

  [a, b] = [1, 2];

  [a, b, ...rest] = [1, 2, 3, 4, 5];

  console.log(
    "Write code to illustrate the use of the rest operator in a destructurng assignment"
  );

  console.log(a);

  console.log(b);

  console.log(rest);
}

{
  /**
   *
   * @param  {...any} arr rest operater in function call
   * @returns {number} sum
   */
  function sum(...arr) {
    return arr.reduce((a, b) => {
      return a + b;
    });
  }

  let output = sum(1, 2, 3, 4, 5);

  console.log(
    "Write code to illustrate the use of the rest operator in function call"
  );
  console.log(output);
}
