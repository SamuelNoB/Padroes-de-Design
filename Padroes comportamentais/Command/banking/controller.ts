import { Transaction } from "./transaction";

export class BankController {
    undoStack: Transaction[]= [];
    redoStack: Transaction[] = [];

    execute(transaction: Transaction): void {
        transaction.execute();
        this.redoStack = [];
        this.undoStack.push(transaction);
    }

    undo(): void {
        if (this.undoStack.length === 0) return;
        const transaction = this.undoStack.pop();
        transaction.undo()
        this.redoStack.push(transaction);
    }

    redo(): void {
        if (this.redoStack.length === 0) return;
        const transaction = this.redoStack.pop()
        transaction.redo();
        this.undoStack.push(transaction);
    }



}