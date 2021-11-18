import { SortingStrategy } from "./SortingStrategy";

export class BucketSort implements SortingStrategy {
    makeSort(aArray: number[]): number[] {
        return this.bucketSort(aArray, aArray.length);
    }

    private insertionSort(array) {
        var length = array.length;
        
        for(var i = 1; i < length; i++) {
        var temp = array[i];
        for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
        }
        
        return array;
    }

    private bucketSort(array: number[], bucketSize) {
        if (array.length === 0) {
            return array;
        }

        // Declaring vars
        var i,
            minValue = array[0],
            maxValue = array[0],
            bucketSize = bucketSize || 5;
        
        // Setting min and max values
        array.forEach(function (currentVal) {
            if (currentVal < minValue) {
                minValue = currentVal;
            } else if (currentVal > maxValue) {
                maxValue = currentVal;
            }
        })
        // Initializing buckets
        var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
        var allBuckets = new Array(bucketCount);
        
        for (i = 0; i < allBuckets.length; i++) {
            allBuckets[i] = [];
        }
        
        // Pushing values to buckets
        array.forEach(function (currentVal) {
            allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
        });

        // Sorting buckets
        array.length = 0;
        for (const bucket of allBuckets) {
            this.insertionSort(bucket);
            bucket.forEach(function (element) {
                array.push(element)
            });
        }

        return array;
    }
}