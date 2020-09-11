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
    //this function sorts the titles aplphabetically and ignore upper case and lower case
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
    let newLine = "\r\n";
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
    //this function sorts the authors aplphabetically and ignore upper case and lower case
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
    let newLine = "\r\n";
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
    //this function convert library id into number sorts the id from small to large
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
    let newLine = "\r\n";
    allID += tempArr[j];
    allID += newLine;
  }

  let textArea = document.getElementById("information");
  textArea.innerHTML = allID;
}

/**This function scramble the book titles
 *
 * @returns{string} show the scrambled book titles to the html page
 */
function scramble() {
  let allTitles = "";
  let tempArr = [];
  for (let i = 0; i < library.length; i++) {
    tempArr[i] = library[i].title;
  }
  tempArr.sort(function (a, b) {
    //this function sorts the titles aplphabetically and ignore upper case and lower case
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
    let space = " ";

    allTitles += tempArr[j];
    allTitles = allTitles + space;
  }
  allTitles = allTitles.trim(); // trim all the space of allTitles

  allTitles = allTitles.split(" "); // convert allTitles into an array of words
  let wordsLength = allTitles.map((words) => words.length); // create a new array that contains the value of word's length
  wordsLength = wordsLength.sort((a, b) => a - b);
  wordsLength = wordsLength.filter(
    (value, index) => wordsLength.indexOf(value) === index // remove all the duplicate value inside the array
  );

  let sameWordLength = [];
  let scrambledTitles = "";
  for (let i = 0; i < wordsLength.length; i++) {
    sameWordLength = allTitles.filter(
      (words) => words.length === wordsLength[i] //create new arrays that contain all the words that have the same word length
    );
    scrambledTitles += sameWordLength.join(" "); //convert all the same word length arrays into a string
    scrambledTitles = scrambledTitles + "\r\n";
  }

  console.log(scrambledTitles);

  let textArea = document.getElementById("information");
  textArea.innerHTML = scrambledTitles;
}

console.log(scramble());
