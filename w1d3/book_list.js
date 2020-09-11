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


function showTitles(){
    let allTitles =""
    for(let i = 0; i < library.length; i++){
        let newLine ="\r\n";
        allTitles += library[i].title;
        allTitles += newLine;
    }
    let textArea = document.getElementById("information");
    textArea.innerHTML = allTitles;

}

function showAuthors(){
    let allAuthors =""
    for(let i = 0; i < library.length; i++){
        let newLine ="\r\n";
        allAuthors += library[i].author;
        allAuthors += newLine;
    }
    let textArea = document.getElementById("information");
    textArea.innerHTML = allAuthors;

}

function showID(){
    let allID =""
    for(let i = 0; i < library.length; i++){
        let newLine ="\r\n";
        allID += library[i].libraryID;
        allID += newLine;
    }
    let textArea = document.getElementById("information");
    textArea.innerHTML = allID;

}

