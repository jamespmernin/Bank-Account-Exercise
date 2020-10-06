class BankAccount {
  constructor(type) {
    this.type = type;
    this.money = 0;
    this.transactionHistory = [];
  }

  withdraw(amt) {
    if (amt > this.money) {
      console.log('Withdrawing only what is in the account');
      this.transactionHistory.push(`Withdrawal of $${this.money}`);
      this.money = 0;
    } else {
      this.money -= amt;
      this.transactionHistory.push(`Withdrawal of $${amt}`);
    }
  }

  deposit(amt) {
    this.money += amt;
    this.transactionHistory.push(`Deposit of $${amt}`);
  }

  showBalance() {
    console.log(`Balance: $${this.money}`);
  }
}

/* Test code */
testAccount = () => {
  const myAccount = new BankAccount;
  // Try to withdraw from empty account
  myAccount.withdraw(1);
  myAccount.showBalance();
  console.log(myAccount.transactionHistory);
  myAccount.deposit(100);
  myAccount.deposit(200);
  myAccount.showBalance();
  console.log(myAccount.transactionHistory);
  myAccount.withdraw(50);
  myAccount.withdraw(1);
  myAccount.showBalance();
  console.log(myAccount.transactionHistory);
  myAccount.withdraw(250);
  myAccount.showBalance();
  console.log(myAccount.transactionHistory);
}

// testAccount();