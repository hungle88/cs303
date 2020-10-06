"use strict";

console.log("Why do all of the shooters show the same value?");
console.log(
  "Because the while loop is done before the function shooter is declared, at that time i is already = 10, and the function shooter return i = 10"
);

/**
 * create an array of shooters
 * @returns {number} number of shooters
 */
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    /**
     * log j into the console
     * @returns {number} j
     */
    let shooter = function () {
      console.log(j);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();

