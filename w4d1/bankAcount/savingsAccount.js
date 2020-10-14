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
   * @param {number} balance is the account balance without interest
   */
  constructor(number, int, balance) {
    super(number, balance);

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

  addInterest() {
    return this._balance * this._interest / 100;

  }


//   toString() {
//     return "Account " + this._number + ": balance " + this._balance +": interest amount" +this._interestAmount;
// }
}

const testSavingsAcc = new SavingsAccount(1234, 3);
console.log("interest rate is: ", testSavingsAcc.getInterest());
testSavingsAcc.deposit(1000);
console.log("balance should be 1000: ", testSavingsAcc.getBalance());
console.log(testSavingsAcc);
