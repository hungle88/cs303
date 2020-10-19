"use strict";

class Member {
  constructor(name, password, membership) {
    this.name = name;
    this.password = password;
    this.membership = membership;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this.name = name;
  }

  get type() {
    return this.type;
  }

  set type(type) {
    this.type = type;
  }

  get password() {
    return this.password;
  }

  set password(password) {
    this.password = password;
  }

  get membership() {
    return this.account;
  }

  set membership(membership) {
    this.membership = membership;
  }

  borrowBook() {
    this.membership.addBooks(books);
  }

  returnBooks(books) {
    // if (this.mealCard.balance >= foodItem.price_in_points) {
    //     this.mealCard.deductPoints(foodItem.price_in_points);
    // } else {
    //     throw new ApplicationError("Insufficient Balance.");
    // }
  }
}

class membership {
  constructor(type, booksAmount, charge) {
    this.type = type;
    this.booksAmount = booksAmount;
    this.charge = charge;
  }

  get booksAmount(){
    return this.booksAmount;
}

set booksAmount(booksAmount){
    this.booksAmount = booksAmount;
}

get type(){
    return this.type;
}

set type(type){
    this.type = type;
}

addBooksAmount(booksAmount) {
    return this.booksAmount += booksAmount;
}

deductBooksAmount(booksAmount) {
    return this.booksAmount -= booksAmount;
}


addCharge(fee) {
    return this.charge += fee;
}

deductCharge(fee) {
    return this.charge -= fee;
}

}

class Loan {
  constructor(book, dueDate) {
    this.book = book;
    this.dueDate = dueDate;
  }

  computeCharge(returnDate) {
    if (returnDate > this.dueDate) {
      let durationInDays =
        Math.round(returnDate - this.dueDate) / (1000 * 60 * 60 * 24);
      let charge = durationInDays * this.book.chargePerDay;
      return charge > this._maximumCharge ? this._maximumCharge : charge;
    } else return 0.0;
  }
}

class BookItem {
  constructor(bookName, authorName, isbn, charge) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.isbn = isbn;
    this.charge = charge;
  }
}

class Library {
  constructor(bookItems, members) {
    this.bookItems = bookItems;
    this.members = members;
  }

  addBookItem(newBookItem) {
    this.bookItems.set(newBookItem.name, newBookItem);
  }
  addMember(newMember) {
    this.Member.set(newMember.name, newMember);
  }
}

const bookItems = new Map();
bookItems.set(
  "javascript",
  new BookItem(
    "A Smarter Way To Learn Javascript",
    "Mark Myers",
    "978-1497408180"
  )
);
bookItems.set(
  "python",
  new BookItem(
    "Automate The Boring Stuff With Python",
    "Al Sweigart",
    "978-1593275990"
  )
);
bookItems.set(
  "html",
  new BookItem(
    "A Smarter Way To Learn HTML & CSS",
    "Mark Myers",
    "978-1508673873"
  )
);
bookItems.set(
  "ios",
  new BookItem(
    "Beginning IOS13 & Swift App Development",
    "Greg Lim",
    "978-1670294661"
  )
);

const members = new Map();
members.set("John", new Member("John", new Membership()));
const library = new Library(bookItems, members);
