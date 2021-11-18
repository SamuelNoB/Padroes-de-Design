import { SortingStrategy } from "./SortingStrategy";

export class SortingCtx {
    private strategy: SortingStrategy;

    constructor(strategy: SortingStrategy) {
        this.strategy = strategy
    }

    /**
     * setStrategy
     */
    public setStrategy(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    /**
     * sort
     */
    public sort(array: number[]): number[] {
        return this.strategy.makeSort(array);
    }
}