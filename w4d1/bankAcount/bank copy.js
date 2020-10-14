{
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
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].getNumber() === number) {
        this.accounts = this.accounts.splice(i, 1);
      }
    }
  }

  accountReport(){
      let report = this.accounts.map(acc => toString(acc));
      return report.join("\n");

  }

  endOfMonth() {
    let report = this.accounts.map(acc =>acc.endOfMonth());
    return report.join("\n");
  }

}



/*global Account, SavingsAccount, CheckingAccount,assert
*/

describe("Bank Class Tests", function() {

    it("addAccount Method Working", function() {
      let account = new Bank();
      let test = new Account(1);
      account.addAccount();
      assert.deepEqual(account.accounts, [test]);
    });
  
    it("addSavingsAccount Method Working", function() {
      let account = new Bank();
      let test = new SavingsAccount(1,3);
      account.addSavingsAccount(3);
      assert.deepEqual(account.accounts, [test]);
    });
  
    it("addCheckingAccount Method Working", function() {
      let account = new Bank();
      let check = new CheckingAccount(1,500);
      account.addCheckingAccount(500);
      assert.deepEqual(account.accounts, [check]);
    });
  
    it("closeAccount Method Working", function() {
      let account = new Bank();
      let check1 = new Account(1);
      let check2 = new SavingsAccount(3,3);
      account.addAccount();
      account.addCheckingAccount(500);
      account.addSavingsAccount(3);
      account.closeAccount(2);
      assert.deepEqual(account.accounts, [check1,check2]);
    });
   
    it("accountReport Method Working", function() {
      let account = new Bank();
      let check1 = new Account(1);
      let check2 = new CheckingAccount(2,500);
      let check3 = new SavingsAccount(3,3);
      account.addAccount();
      account.addCheckingAccount(500);
      account.addSavingsAccount(3);
      let retrn = check1.toString() + "\n" +
                  check2.toString() + "\n" +
                  check3.toString();
      assert.equal(account.accountReport(), retrn);
    });
  
  });
  
  
  
  
  
  describe("endOfMonth Report Tests", function() {
  
    it("Acount endOfMonth Method Working", function() {
      let check1 = new Account(1);
      assert.equal(check1.endOfMonth(), "");
    });
  
    it("CheckingAccount endOfMonth Method Working", function() {
      let check1 = new CheckingAccount(3,500);
      check1.withdraw(100);
      assert.equal(check1.endOfMonth(), "Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500");
      let check2 = new CheckingAccount(3,500);
      assert.equal(check2.endOfMonth(), "CheckingAccount 3: balance: 0 overdraft limit: 500");
    });
  
    it("SavingsAccount endOfMonth Method Working", function() {
      let check1 = new SavingsAccount(2,2.5);
      check1.deposit(100);
      assert.equal(check1.endOfMonth(), "Interest added: 2.5 SavingsAccount 2: balance: 102.5 interest: 2.5");
    });
  
  
    it("Bank endOfMonth Method Working", function() {
      let account = new Bank();
      let check1 = new Account(1);
      let check2 = new CheckingAccount(2,500);
      let check3 = new SavingsAccount(3,3);
      account.addAccount(); 
      account.addCheckingAccount(500);
      account.addSavingsAccount(3);
      let retrn = check1.endOfMonth() + "\n" +
                   check2.endOfMonth() + "\n" +
                   check3.endOfMonth();
      assert.equal(account.endOfMonth(), retrn);
    });
  
  });
}