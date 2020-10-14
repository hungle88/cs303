"use strict";

/**
 * A Bank Account class
 * 
 * Extends the basic Account class, adds interest functionality
 * CheckingAccount should have an overdraft limit variable.
 * The overdraft amount indicates how much a person is allowed to temporarily withdraw beyond what they have. 
 * In other words, it’s the amount that an account is allowed to go into the red (negative balance).
 */
class CheckingAccount extends Account{
    /**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {number} number the number for this account
     * @param {number} int is the interest rate
     */
    constructor(number, int) {
        super(number);
        this._limit = int;
    }

    /**
     * @returns {number} the interest rate
     */
    getLimit(){
        return this._limit;
    }

    /**
     * 
     * @param {number} newLimit is the new overdraft limit
     * @returns {undefined} resets the overdraft limit
     */
    setLimit(newLimit){
        this._limit = newLimit;
    }

addInterest() {
    return 
}

    }

    const testCheckingAcc = new CheckingAccount(1234, 3);
    console.log("Overdraft limit is: ", testCheckingAcc.getLimit());
    testCheckingAcc.withdraw(1000);
    console.log("balance should be 1000: ", testCheckingAcc.getBalance());
    console.log(testCheckingAcc);