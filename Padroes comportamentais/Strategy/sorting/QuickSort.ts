import { SortingStrategy } from "./SortingStrategy";

export class QuickSort implements SortingStrategy {
    makeSort(aArray: number[]): number[] {
        return this.quickSort(aArray);
    }

    private quickSort(arr: Array<number>, start: number = 0, end: number = arr.length): Array<number> {
        if (start < end) {
            let p = this.partition(arr, start, end);
            this.quickSort(arr, start, p - 1);
            this.quickSort(arr, p + 1, end);
        }
        return arr;
    }

    private partition(arr: Array<number>, start: number = 0, end: number = arr.length) {
        let pivot: number = arr[start];
        let swapIndex: number = start;
        for (let i = start + 1; i < end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            this.swap(arr, i, swapIndex);
        }
        }
        this.swap(arr, start, swapIndex);
        return swapIndex;
    }

    private swap(arr: Array<number>, i: number, j: number) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
