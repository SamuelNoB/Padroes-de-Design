import { Account } from "./account";
import { Transaction } from "./transaction";

export class Deposit implements Transaction{
    account: Account;
    amount: number;

    constructor(account: Account, amount: number) {
        this.account = account;
        this.amount = amount;
    }


    transactionDetails(): string {
        return `$${this.amount/100} to account ${this.account.name}`;
    }

    execute(): void {
        this.account.deposit(this.amount);
        console.log("Deposit ", this.transactionDetails());
    }

    undo(): void {
        this.account.withdraw(this.amount);
        console.log(`Undid deposit of ${this.transactionDetails()}`);
        
    }
    redo(): void {
        this.account.deposit(this.amount);
        console.log("Redid deposit of ", this.transactionDetails());
        
    }
}

export class Withdraw implements Transaction{
    account: Account;
    amount: number;

    constructor(account: Account, amount: number) {
        this.account = account;
        this.amount = amount;
    }

    transactionDetails(): string {
        return `$${this.amount/100} to account ${this.account.name}`;
    }

    execute(): void {
        this.account.withdraw(this.amount);
        console.log("Withdraw ", this.transactionDetails())
    }

    undo(): void {
        this.account.deposit(this.amount);
        console.log(`Undid withdraw of ${this.transactionDetails()}`);
        
    }
    redo(): void {
        this.account.withdraw(this.amount);
        console.log("Redid withdraw of ", this.transactionDetails());
        
    }
}


export class Trasfer implements Transaction{
    fromAccount: Account;
    toAccount: Account;
    amount: number;
    
    constructor(fromAccount: Account, toAccount: Account, amount: number) {
        this.fromAccount = fromAccount;
        this.toAccount = toAccount;
        this.amount = amount;
    }

    transactionDetails(): string {
        return `$${this.amount/100} from account ${this.fromAccount.name} to account ${this.toAccount.name}`;
    }

    execute(): void {
        this.fromAccount.withdraw(this.amount);
        this.toAccount.deposit(this.amount);
        console.log(`Transferred ${this.transactionDetails()}`)
    }

    undo(): void {
        this.toAccount.withdraw(this.amount);
        this.fromAccount.deposit(this.amount)
        console.log(`Undid transfer of ${this.transactionDetails()}`);
        
    }
    redo(): void {
        this.fromAccount.withdraw(this.amount);
        this.toAccount.deposit(this.amount);
        console.log("Redid transer of ", this.transactionDetails());
        
    }
}