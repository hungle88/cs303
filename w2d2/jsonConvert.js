"use strict";

let user = {
    name: "John Smith",
    age: 35
  };

  let json = JSON.stringify(user);
  let value =JSON.parse(json);

  console.log(json);
  console.log(typeof(json));
  console.log(value);
  console.log(typeof(value));