/* eslint-disable require-jsdoc */
"use strict";
/**Arrow functions and lexical ‘this’ exercise */
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach((student) =>
      console.log(this.title + ": " + student)
    );
  },
};
group.showList();
