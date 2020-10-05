/* eslint-disable */
"use strict";

{
  //Copy an array

  let arr = ["Hello", "Hi", "Bye"];
  let arrCopy = [...arr];
  console.log("Copy an array");
  console.log(arrCopy);
}

{
  //Concatenate arrays into a new array

  let arrOne = [1, 2, 3];
  let arrTwo = [4, 5, 6];
  let mergedArr = [...arrOne, ...arrTwo];
  console.log("Concatenate arrays into a new array");
  console.log(mergedArr);
}

{
  //Concatenate an array and a new array element

  let arrOne = ["d", "e", "f"];
  let newArr = ["a", "b", "c", ...arrOne];

  console.log("Concatenate an array and a new array element");
  console.log(newArr);
}

{
  //Use an array as arguments

  let arrOne = ["Hello", "Hi", "Goodbye"];
  function saySomething(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  }

  console.log("Use an array as arguments");
  saySomething(...arrOne);
}

{
  //Use Math.min and Math.max

  let arr = [1, 2, 3, 4, 5];
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log("Use Math.min and Math.max");
  console.log(max);
  console.log(min);
}

{
  //Combine several objects into a single object

  let objOne = {
    a: 1,
    b: 2,
    c: 3,
  };

  let objTwo = {
    d: 4,
    e: 5,
    f: 6,
  };

  let objMerge = { ...objOne, ...objTwo };

  console.log("Combine several objects into a single object");
  console.log(objMerge);
}
