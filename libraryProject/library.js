class ApplicationError extends Error {}
class Member {
  constructor(name, password, membership) {
    this._name = name;
    this._password = password;
    this._membership = membership;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
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

class Membership {
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
  constructor(bookName, authorName, isbn, chargePerDay) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.isbn = isbn;
    this.chargePerDay = chargePerDay;
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
  addMember(newMember) {
    this.members.set(newMember.name, newMember);
  }
}


const bookItems = new Map();
bookItems.set(
  "javascript",
  new BookItem(
    "A Smarter Way To Learn Javascript",
    "Mark Myers",
    "978-1497408180",
    0.5
    
  )
);
bookItems.set(
  "python",
  new BookItem(
    "Automate The Boring Stuff With Python",
    "Al Sweigart",
    "978-1593275990",
    0.5


  )
);
bookItems.set(
  "html",
  new BookItem(
    "A Smarter Way To Learn HTML & CSS",
    "Mark Myers",
    "978-1508673873",
    0.5


  )
);
bookItems.set(
  "ios",
  new BookItem(
    "Beginning IOS13 & Swift App Development",
    "Greg Lim",
    "978-1670294661",
    0.5



  )
);
const members = new Map();
// students.set("John", new Student("John", new StudentAccount()));
const library = new Library(bookItems, members);
