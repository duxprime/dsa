/**
 * Finds the longest contiguous sub-array in an array of integers that yields
 * the largest sum using Kadane's algorithm.
 * @param arr An array of positive and/or negative integers.
 */
export function getContiguousMaxSum(arr:number[]) {
    let maxSum = 0;
    let currentMaxSum = 0;
    let startingIndex = 0;
    let endingIndex = 0;
    let newRun = true;

    arr.forEach((num, i) => {
        currentMaxSum += num;
        if(currentMaxSum < 1) {
            currentMaxSum = 0;
            endingIndex = startingIndex = i;
            newRun = true;
            return;
        }            

        if(newRun){
            startingIndex = i;
            newRun = false;
        }

        endingIndex = i;    
        maxSum = Math.max(currentMaxSum, maxSum);  
    });

    return {
        sum: maxSum,
        start: startingIndex,
        end: endingIndex
    };
}