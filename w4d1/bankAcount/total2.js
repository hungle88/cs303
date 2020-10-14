"use strict";

/**
 * A Bank Account class
 * 
 * Provides the basic functionality that every account should have
 */
class Account {
    /**
     * Constructor for creating a new Account object
     * 
     * @param {number} number the number for this account
     */
    constructor(number) {
        this._number = number; // the account number
        this._balance = 0.0;
    }

    /**
     * Getter for the 'private' number field
     * 
     * @returns {number} the account number
     */
    getNumber() {
        return this._number;
    }

    /**
     * Accessor for the 'private' balance field
     * 
     * @returns {number} balance for this account
     */
    getBalance() {
        return this._balance;
    }

    /**
     * Method to add money into the account
     * 
     * @param {number} amount money to be deposited into the account 
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     */
    deposit(amount) {
        if (amount <= 0) {
            throw new RangeError("Deposit amount has to be greater than zero");
        }
        this._balance += amount;
    }

    /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Account " + this._number + ": balance " + this._balance;
    }
}


"use strict";

/**
 * A Bank Account class
 *
 * Extends the basic Account class, adds interest functionality
 * CheckingAccount should have an overdraft limit variable.
 * The overdraft amount indicates how much a person is allowed to temporarily withdraw beyond what they have.
 * In other words, it’s the amount that an account is allowed to go into the red (negative balance).
 */
class CheckingAccount extends Account {
  /**
   * Constructor for creating a new SavingsAccount object
   *
   * @param {number} number the number for this account
   * @param {number} int is the interest rate
   */
  constructor(number, overdraft) {
    super(number);
    this._overdraft = overdraft;
  }

  /**
   * @returns {number} the interest rate
   */
  getOverdraft() {
    return this._overdraft;
  }

  /**
   *
   * @param {number} newOverdraft is the new overdraft limit
   * @returns {undefined} resets the overdraft limit
   */
  setOverdraft(newOverdraft) {
    this._overdraft = newOverdraft;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance + this.getOverdraft()) {
      throw Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  toString() {
    return (
      "Checking Account: " +
      this._number +
      "; balance: " +
      this._balance +
      "; overdraw allowed: " +
      this.getOverdraft()
    );
  }

  endOfMonth() {
    let warning = "";
    if (this.getBalance() < 0) warning = "Warning! Your account balance is low.";

    return (
      warning +
      "CheckingAccount " +
      this.getNumber() +
      ": balance: " +
      this.getBalance() +
      " overdraft limit: " +
      this.getOverdraft()
    );
  }
}

const testCheckingAcc = new CheckingAccount(1234, 500);
console.log("Overdraft limit is: ", testCheckingAcc.getOverdraft());
testCheckingAcc.withdraw(1000);
console.log("balance should be 1000: ", testCheckingAcc.getBalance());
console.log(testCheckingAcc);
