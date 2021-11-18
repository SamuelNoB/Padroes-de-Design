import { SortingCtx } from "./sorting/SortingCtx";
import { BubbleSort } from "./sorting/BubbleSort";
import { QuickSort } from "./sorting/QuickSort";
import { MergeSort } from "./sorting/MergeSort";
import {BucketSort} from "./sorting/BucketSort";

function countTime(name, fn, arr) {
        var startTime = new Date();
        fn.sort(arr);
        var endTime = new Date();
        console.log(`Tempo decorrido para ${name}: ${(endTime.getTime() - startTime.getTime())/1000}s`)    
}

function main() {
    var arr = [];
    while(arr.length < 1000000){
        var r = Math.floor(Math.random() * 100) + 1;
        arr.push(r);
        //if(arr.indexOf(r) === -1) arr.push(r);
    }
    const mySorting = new SortingCtx(new MergeSort());

    countTime('MergeSort', mySorting, arr)

    /*
    mySorting.setStrategy(new QuickSort());
    countTime('QuickSort', mySorting, arr);*/

    mySorting.setStrategy(new BucketSort());
    countTime('BucketSort', mySorting, arr);
}

main()