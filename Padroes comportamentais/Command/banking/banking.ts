import { Account } from "./account";
export class Bank {
    accounts: {};

    constructor() {
        this.accounts = {};
    }

    createAccount(name: string): Account {
        var r = Math.floor(Math.random() * 10000) + 1;
        const number = r.toString();
        const account = new Account(name, number);
        this.accounts[number] = account;
        return account;
    }

    getAccount(accountNumber: string): Account {
        return this.accounts[accountNumber];
    }
}