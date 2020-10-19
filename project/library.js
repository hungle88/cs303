class ApplicationError extends Error {}
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

class BookItem {
  constructor(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
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
bookItems.set("javascript", new BookItem("A Smarter Way To Learn Javascript", "Mark Myers"));
bookItems.set("python", new BookItem("Automate The Boring Stuff With Python", "Al Sweigart"));
bookItems.set("html", new BookItem("A Smarter Way To Learn HTML & CSS", "Mark Myers"));
bookItems.set("ios", new BookItem("Beginning IOS13 & Swift App Development", "Greg Lim"));

const students = new Map();
students.set("John", new Student("John", new StudentAccount()));
const library = new Library(bookItems, students);
