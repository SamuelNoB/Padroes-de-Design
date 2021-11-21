export class Account {
    name: string;
    number: string;
    balance: number;
    constructor(name: string, number: string, balance: number = 0) {
        this.name = name;
        this.number = number;
        this.balance = balance;
    }
    deposit(amount: number):void {this.balance += amount}
    withdraw(amount: number):void {this.balance -= amount}
}