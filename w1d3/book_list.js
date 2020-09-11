/* eslint-disable id-length */
/* eslint-disable no-unused-vars */

"use strict";

let library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
/**This function add new books to the library
 *
 * @returns{object} return and add a new object to the library
 */
function addBooks() {
  let book = {};
  book.title = document.getElementById("new_title").value;
  book.author = document.getElementById("new_author").value;
  book.libraryID = +document.getElementById("new_id").value;

  library.push(book);
}
/**This function show titles of the books sorted alphabetically
 *
 * @returns{string} show the title of the books to the html page sorted alphabetically
 */
function showTitles() {
  let allTitles = "";
  let tempArr = [];
  for (let i = 0; i < library.length; i++) {
    tempArr[i] = library[i].title;
  }
  tempArr.sort(function (a, b) {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (y < x) {
      return 1;
    }
    return 0;
  });
  for (let j = 0; j < tempArr.length; j++) {
    let newLine = "\n";
    allTitles += tempArr[j];
    allTitles += newLine;
  }

  let textArea = document.getElementById("information");
  textArea.innerHTML = allTitles;
}
/**This function show authors of the books sorted alphabetically
 *
 * @returns{string} show the authors of the books to the html page sorted alphabetically
 */
function showAuthors() {
  let allAuthors = "";
  let tempArr = [];
  for (let i = 0; i < library.length; i++) {
    tempArr[i] = library[i].author;
  }
  tempArr.sort(function (a, b) {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (y < x) {
      return 1;
    }
    return 0;
  });
  for (let j = 0; j < tempArr.length; j++) {
    let newLine = "\n";
    allAuthors += tempArr[j];
    allAuthors += newLine;
  }

  let textArea = document.getElementById("information");
  textArea.innerHTML = allAuthors;
}
/**This function show library ID of the books, sorted
 *
 * @returns{number} show the sorted ID of the books to the html page
 */
function showID() {
  let allID = "";
  let tempArr = [];
  for (let i = 0; i < library.length; i++) {
    tempArr[i] = library[i].libraryID;
  }
  tempArr.sort(function (a, b) {
    let x = +a;
    let y = +b;
    if (x < y) {
      return -1;
    }
    if (y < x) {
      return 1;
    }
    return 0;
  });
  for (let j = 0; j < tempArr.length; j++) {
    let newLine = "\n";
    allID += tempArr[j];
    allID += newLine;
  }

  let textArea = document.getElementById("information");
  textArea.innerHTML = allID;
}
