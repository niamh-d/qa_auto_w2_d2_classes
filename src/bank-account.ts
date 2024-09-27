class BankAccount {
    balance: number

    constructor(initialAmount: number) {
        this.balance = initialAmount;
    }

    deposit(amount: number): number {
        return this.balance += amount;
    }
}

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100)) // After fixing: will print 600
