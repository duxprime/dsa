export function quickSort<T>(arr:T[]):T[] {
    if(arr.length <= 1){
        return arr;
    }

    sort(arr, 0, arr.length - 1);

    return arr;
}

function sort<T>(arr:T[], low:number, high:number){ 
    if(low < 0 ||  (high > arr.length - 1)){
        throw new Error('Index out of bounds.');
    }          

    if(high - low < 2){
        return;
    }
    console.log(arr.slice(low, high + 1));

    const splitPoint = partition(arr, low, high);
    sort(arr, low, splitPoint - 1);
    sort(arr, splitPoint + 1, high);
}

function partition<T>(arr:T[], low:number, high:number){
    const pivot = generatePivot(low, high);
    let left = low
    let right = high;

    do {
        if(arr[left] > arr[pivot]){
            do {
                if(arr[right] < arr[pivot]) {
                    swap(arr, left, right);
                    break;
                }
                right--;
            }
            while(right > left)
        }
        left++;
    }
    while(left < right)

    const splitPoint = Math.max(right - 1, 0);
    swap(arr, pivot, splitPoint);

    return splitPoint;
}

function swap<T>(arr:T[], i1:number, i2:number){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    temp = null;
}

function generatePivot(low:number, high:number){
    return Math.round((high + low)/2);
}