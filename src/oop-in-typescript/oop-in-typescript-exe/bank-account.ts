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
      