/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
"use strict";

class Bank {
  constructor() {
    this.accounts = [];
    this.nextNumber = 1;
  }

  addAccount() {
    this.accounts.push(new Account(this.nextNumber));
    this.nextNumber += 1;
  }

  addSavingsAccount(interest) {
    this.accounts.push(new SavingsAccount(this.nextNumber, interest));
    this.nextNumber += 1;
  }

  addCheckingAccount(overdraft) {
    this.accounts.push(new CheckingAccount(this.nextNumber, overdraft));
    this.nextNumber += 1;
  }

  closeAccount(number) {
    let output = this.accounts.reduce((accumulator, current, index) =>
      current.getNumber() === number ? index : accumulator, -1
    );
    if (output !== -1) this.accounts.splice(output, 1);

    // return this.accounts;
  }
  // for (let i = 0; i < this.accounts.length; i++) {
  //   if (this.accounts[i].getNumber() === number) {
  //     this.accounts.splice(this.accounts[i], 1);
  //     // return this.accounts;
  //   }
  // }

  accountReport() {
    let report = this.accounts.map((acc) => acc.toString());
    return report.join("\n");
  }

  endOfMonth() {
    let report = this.accounts.map((acc) => acc.endOfMonth());
    return report.join("\n");
  }
}

describe("Bank Class", function () {
  it("addAccount method is working", function () {
    let account = new Bank();
    let test = new Account(1);
    account.addAccount();
    assert.deepEqual(account.accounts, [test]);
  });

  it("addSavingsAccount method is working", function () {
    let account = new Bank();
    let test = new SavingsAccount(1, 5);
    account.addSavingsAccount(5);
    assert.deepEqual(account.accounts, [test]);
  });

  it("addCheckingAccount method is working", function () {
    let account = new Bank();
    let test = new CheckingAccount(1, 1000);
    account.addCheckingAccount(1000);
    assert.deepEqual(account.accounts, [test]);
  });

  it("closeAccount method is working", function () {
    let account = new Bank();

    let testSav = new SavingsAccount(1, 2);
    let testChk = new CheckingAccount(3, 500);

    account.addSavingsAccount(2);
    account.addAccount();
    account.addCheckingAccount(500);
    account.closeAccount(2);
    assert.deepEqual(account.accounts, [testSav, testChk]);
  });

  it("accountReport method is working", function () {
    let account = new Bank();
    let testAcc = new Account(1);
    let testChk = new CheckingAccount(2, 1000);
    let testSav = new SavingsAccount(3, 2);
    account.addAccount();
    account.addCheckingAccount(1000);
    account.addSavingsAccount(2);
    let output =
      testAcc.toString() +
      "\n" +
      testChk.toString() +
      "\n" +
      testSav.toString();
    assert.equal(account.accountReport(), output);
  });
});

describe("endOfMonth Report", function () {
  it("Acount's endOfMonth method is working", function () {
    let test = new Account(1);
    assert.equal(test.endOfMonth(), "");
  });

  it("CheckingAccount's endOfMonth method is working", function () {
    let test = new CheckingAccount(1, 500);
    test.withdraw(100);
    assert.equal(
      test.endOfMonth(),
      "Warning! Your account balance is low. CheckingAccount 1: balance: -100 overdraft limit: 500"
    );
    let test2 = new CheckingAccount(2, 500);
    assert.equal(
      test2.endOfMonth(),
      "CheckingAccount 2: balance: 0 overdraft limit: 500"
    );
  });

  it("SavingsAccount's endOfMonth method is working", function () {
    let test = new SavingsAccount(2, 2);
    test.deposit(100);
    assert.equal(
      test.endOfMonth(),
      "Interest added: 2 SavingsAccount 2: balance: 102 interest: 2"
    );
  });

  it("Bank's endOfMonth method is working", function () {
    let account = new Bank();
    let testAcc = new Account(1);
    let testChk = new CheckingAccount(2, 1000);
    let testSav = new SavingsAccount(3, 2);
    account.addAccount();
    account.addCheckingAccount(1000);
    account.addSavingsAccount(2);
    let output =
      testAcc.endOfMonth() +
      "\n" +
      testChk.endOfMonth() +
      "\n" +
      testSav.endOfMonth();
    assert.equal(account.endOfMonth(), output);
  });
})
