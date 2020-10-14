
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
     * Constructor for creating a new CheckingAccount object
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
      if (this.getBalance() < 0) warning = "Warning! Your account balance is low. ";
  
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
  
//   const testCheckingAcc = new CheckingAccount(1234, 500);
//   console.log("Overdraft limit is: ", testCheckingAcc.getOverdraft());
//   testCheckingAcc.withdraw(1000);
//   console.log("balance should be 1000: ", testCheckingAcc.getBalance());
//   console.log(testCheckingAcc);



  describe("Checking Account", function() {

    it("setOverdraft method is working", function() {
      let account = new CheckingAccount(1234);
      account.setOverdraft(500);
      assert.equal(account._overdraft, 500);
    });
  
    it("getOverdraft is method working", function() {
      let account = new CheckingAccount(1234);
      account.setOverdraft(500);
      assert.equal(account.getOverdraft(), 500);
    });
  
    it("withdraw method is working", function() {
      let account = new CheckingAccount(1234, 100);
      account.deposit(100);
      account.withdraw(150);
      assert.equal(account.getBalance(), -50);
      account.deposit(200);
      account.withdraw(50);
      assert.equal(account.getBalance(), 100);
      account.deposit(100);
      account.withdraw(10);
      assert.equal(account.getBalance(), 190);
  
    });
  
  
    it("toString method is working", function() {
      let account = new CheckingAccount(1234,500);
      account.deposit(2000);
      assert.equal(account.toString(), "Checking Account: 1234; balance: 2000; overdraw allowed: 500");
    });
  
  });
