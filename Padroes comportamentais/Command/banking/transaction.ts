export interface Transaction {
    execute(): void

    undo(): void
    redo(): void
}