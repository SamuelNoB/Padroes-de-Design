import { Bank } from "./banking/banking";
import { Deposit, Withdraw, Trasfer } from "./banking/commands";
import { BankController } from "./banking/controller";

function main() {
    const bank = new Bank();
    const controller = new BankController();


    const account1 = bank.createAccount("Samuel");
    const account2 = bank.createAccount("google");
    const account3 = bank.createAccount("Microsoft");

    controller.execute(new Deposit(account1, 100000));
    controller.execute(new Deposit(account2, 100000));
    controller.execute(new Deposit(account3, 100000));
    controller.undo();
    controller.redo()

    controller.execute(new Trasfer(account2, account1, 50000));

    controller.execute(new Withdraw(account1, 150000));
    
    console.table(bank.accounts);
}

main()