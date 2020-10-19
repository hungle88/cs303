class ApplicationError extends Error {}
class Student {
  constructor(name, studentID, password) {
    this._name = name;
    this._studentID = studentID;
    this._password = password;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get studentID() {
    return this._studentID;
  }

  set studentID(studentID) {
    this._name = studentID;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    this._password = password;
  }

  get account() {
    return this._account;
  }

  set account(account) {
    this.account = account;
  }

  borrowBook(books) {
    this._account.addBooks(books);
  }
}

class StudentAccount {
  constructor(books) {
    this._books = books;
  }

  get books() {
    return this.books;
  }

  set books(books) {
    this._books = books;
  }

//   addBooks(books) {
//     let bookArr = [];
//     bookArr.push(books);
//     return bookArr;
//   }

//   removeBooks(books) {}
}

class BookItem {
  constructor(name) {
    this.name = name;
  }
}

class Library {
  constructor(bookItems, students) {
    this.bookItems = bookItems;
    this.students = students;
  }

  addBookItem(newBookItem) {
    this.bookItems.set(newBookItem.name, newBookItem);
  }
  addStudent(newStudent) {
    this.students.set(newStudent.name, newStudent);
  }
}

const bookItems = new Map();
bookItems.set("javascript", new BookItem("A Smarter Way To Learn Javascript"));
bookItems.set("python", new BookItem("Automate The Boring Stuff With Python"));
bookItems.set("html", new BookItem("A Smarter Way To Learn HTML & CSS"));
bookItems.set("ios", new BookItem("Beginning IOS13 & Swift App Development"));

const students = new Map();
students.set("John", new Student("John", new StudentAccount()));
const library = new Library(bookItems, students);
