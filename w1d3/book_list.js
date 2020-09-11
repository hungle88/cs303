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
/**This function new books to the library
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
/**This function show titles of the books
 * 
 * @returns{string} show the title of the books to the html page
 */
function showTitles() {
  let allTitles = "";
  for (let i = 0; i < library.length; i++) {
    let newLine = "\r\n";
    allTitles += library[i].title;
    allTitles += newLine;
  }
  let textArea = document.getElementById("information");
  textArea.innerHTML = allTitles;
}
/**This function show authors of the books
 * 
 * @returns{string} show the authors of the books to the html page
 */
function showAuthors() {
  let allAuthors = "";
  for (let i = 0; i < library.length; i++) {
    let newLine = "\r\n";
    allAuthors += library[i].author;
    allAuthors += newLine;
  }
  let textArea = document.getElementById("information");
  textArea.innerHTML = allAuthors;
}
/**This function show titles of the books
 * 
 * @returns{number} show the ID of the books to the html page
 */
function showID() {
  let allID = "";
  for (let i = 0; i < library.length; i++) {
    let newLine = "\r\n";
    allID += library[i].libraryID;
    allID += newLine;
  }
  let textArea = document.getElementById("information");
  textArea.innerHTML = allID;
}
