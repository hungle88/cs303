{
"use strict";

/**
 * A Bank Account class
 *
 * Extends the basic Account class, adds interest functionality
 * SavingsAccount should have an interest variable, which is set in the
 * constructor and has a getter and a setter mehtod. It should also have an
 * addInterest() method which deposits the interest amount into the account.
 * The calculation for the amount is balance * interest / 100 .
 */
class SavingsAccount extends Account {
  /**
   * Constructor for creating a new SavingsAccount object
   *
   * @param {number} number the number for this account
   * @param {number} int is the interest rate
   */
  constructor(number, int) {
    super(number);
    this._interest = int;
  }

  /**
   * @returns {number} the interest rate
   */
  getInterest() {
    return this._interest;
  }

  /**
   *
   * @param {number} newInterest is the new Interest rate
   * @returns {undefined} resets the interest property
   */
  setInterest(newInterest) {
    this._interest = newInterest;
  }


  addInterest () {
    let interest = this.getBalance() * this.getInterest() / 100;
    if(interest > 0) this.deposit(interest);
    return interest;
  }

  toString() {
    return (
      "Savings Account: " +
      this._number +
      "; balance: " +
      this._balance +
      "; interest: " +
      this._interest
    );
  }

  endOfMonth() {
    return (
      "Interest added: " +
      this.addInterest() +
      " SavingsAccount: " +
      this.getNumber() +
      " balance: " +
      this.getBalance() +
      " interest: " +
      this.getInterest()
    );
  }
}

const testSavingsAcc = new SavingsAccount(1234, 3);
console.log("interest rate is: ", testSavingsAcc.getInterest());
testSavingsAcc.deposit(1000);
console.log("balance should be 1000: ", testSavingsAcc.getBalance());
console.log(testSavingsAcc);

describe("Saving Account", function() {

    it("setInterest method is working", function() {
      let account = new SavingsAccount(1234);
      account.setInterest(2);
      assert.equal(account._interest, 2);
    });
  
    it("getInterest method is working", function() {
      let account = new SavingsAccount(1234);
      account.setInterest(2.5);
      assert.equal(account.getInterest(), 2.5);
    });
  
    it("addInterest method is orking", function() {
      let account = new SavingsAccount(1234);
      account.deposit(100);
      account.setInterest(2.5);
      account.addInterest();
      assert.equal(account.getBalance(), 102.5);
    });
  
    it("toString method is working", function() {
      let account = new SavingsAccount(1234,2.5);
      account.deposit(100);
      assert.equal(account.toString(), "Savings Account: 1234; balance: 100; interest: 2.5");
    });
  
  });
}