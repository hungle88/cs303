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

function addBook(){

  let title = document.getElementById("new_title").value;
  let author = document.getElementById("new_author").value;
  let libraryID = document.getElementById("new_id").value;

  let book = new book(title, author, libraryID);
  library.push(book);

}

function showTitle(){
    let test = "Test";
document.getElementById("information").innerHTML = test;


}

console.log(library);