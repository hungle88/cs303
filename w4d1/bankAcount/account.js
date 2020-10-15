/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
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

    endOfMonth() {
        return "";
      }
}



describe("Bank account", function() {

    it("getNumber method is Working", function() {
      let account = new Account(1234);
      assert.equal(account.getNumber(), 1234);
    });
  
    it("getBalance method is working", function() {
      let account = new Account(1234);
      account._balance = 2000;
      assert.equal(account.getBalance(), 2000);
    });
  
    it("deposit method is working", function() {
      let account = new Account(1234);
      account.deposit(1000);
      assert.equal(account._balance, 1000);
    });
  
    it("withdraw method is working", function() {
      let account = new Account(1234);
      account._balance = 2000;
      account.withdraw(500);
      assert.equal(account._balance, 1500);
    });
  
    it("toString method Working", function() {
      let account = new Account(1234);
      account.deposit(2000);
      assert.equal(account.toString(), "Account 1234: balance 2000");
    });
  
  });
  