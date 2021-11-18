export interface SortingStrategy {
    makeSort(aArray: number[]): number[];
}