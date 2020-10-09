/* eslint-disable id-length */
/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
"use strict";
const prompt = require("prompt-sync")();


/**Fix a function that loses "this" using Bind */
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

