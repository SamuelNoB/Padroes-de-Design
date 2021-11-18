import { SortingStrategy } from "./SortingStrategy";
export class BubbleSort implements SortingStrategy {
    makeSort(aArray: number[]): number[] {
        let array = aArray.slice(); // creates a copy of the array

        for(let i = 0; i < array.length; i++) {
            for(let j = 0; j < array.length - 1; j++) {

                if(array[j] > array[j + 1]) {
                    let swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
    return array;
    }
}