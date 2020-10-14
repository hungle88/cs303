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

