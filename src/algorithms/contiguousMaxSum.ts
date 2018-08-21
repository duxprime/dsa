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

    arr.forEach((num, i) => {
        currentMaxSum += num;

        // the current run is ending
        if(currentMaxSum < 0) {
            currentMaxSum = 0;
            endingIndex = startingIndex = i + 1;
            return;
        }            

        if(currentMaxSum >= maxSum){
            endingIndex = i;
            maxSum = currentMaxSum;
        } 
    });

    return {
        sum: maxSum,
        start: startingIndex,
        end: endingIndex
    };
}