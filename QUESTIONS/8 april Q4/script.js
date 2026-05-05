// Bank Account Object
let bankAccount = {
  balance: 1000,

  // Deposit
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return this.balance;
    } else {
      return "Invalid deposit amount";
    }
  },

  // Withdraw
  withdraw(amount) {
    if (amount <= 0) {
      return "Invalid withdrawal amount";
    }

    if (amount > this.balance) {
      return "Insufficient balance";
    }

    this.balance -= amount;
    return this.balance;
  },

  // Check Balance
  checkBalance() {
    return this.balance;
  }
};

// 🔥 Example Usage
console.log(bankAccount.deposit(500));      // 1500
console.log(bankAccount.withdraw(300));     // 1200
console.log(bankAccount.withdraw(2000));    // Insufficient balance
console.log(bankAccount.checkBalance());    // 1200