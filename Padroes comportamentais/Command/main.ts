import { Bank } from "./banking/banking";
import { Deposit, Withdraw, Trasfer, Batch } from "./banking/commands";
import { BankController } from "./banking/controller";

function main() {
    const bank = new Bank();
    const controller = new BankController();


    const account1 = bank.createAccount("Samuel");
    const account2 = bank.createAccount("google");
    const account3 = bank.createAccount("Microsoft");
    const account = 0

    const commands= [
    new Deposit(account1, 100000),
    new Deposit(account2, 100000), 
    new Deposit(account3, 100000),
    new Trasfer(account2, account1, 50000),
    new Withdraw(account1, 10000000)
    ];

    controller.execute(new Batch(commands))

    console.table(bank.accounts);
}

main()