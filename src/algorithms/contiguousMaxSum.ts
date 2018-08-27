/**
 * Finds the longest contiguous sub-array in an array of integers that yields
 * the largest sum using Kadane's algorithm.
 * @param arr An array of positive and/or negative integers.
 */
export function getContiguousMaxSum(arr:number[]) {
    let maxSum = 0;
    let currentSum = 0;
    let startIndex = 0;
    let endIndex = 0;
    let tempStart = 0;

    arr.forEach((num, i) => {
        currentSum += num;

        // the current run is ending
        if(currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
            return;
        }            

        if(currentSum >= maxSum){
            endIndex = i;
            startIndex = tempStart;
            maxSum = currentSum;
        } 
    });

    return {
        sum: maxSum,
        start: startIndex,
        end: endIndex
    };
}