class BankAccount {
    private balance: number;

    constructor(balance: number){
        this.balance = balance;
    }

    deposit(amount: number): void{
        this.balance += amount;
    }
    withdrow(amount: number): void{
        if ( this.balance < amount){
            return;
        }
        this.balance -= amount;
    }

    getBalance(): number{
        return this.balance;
    }
}
let account = new BankAccount(100)
account.deposit(50);
account.withdrow(30);
console.log(account.getBalance());
