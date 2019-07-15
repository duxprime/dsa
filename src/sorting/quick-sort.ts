export function quickSort<T>(arr:T[]):T[] {
    if(arr.length <= 1){
        return arr;
    }

    sort(arr, 0, arr.length - 1);

    return arr;
}

function sort(arr:any[], low:number, high:number){ 
    if((high > arr.length - 1) || (high - low < 2)){
        return;
    }

    let pivot = partition(arr, low, high);
    sort(arr, low, pivot - 1);
    sort(arr, pivot + 1, high);
}

function partition<T>(arr:T[], low:number, high:number){
    let pivot = generatePivot(low, high);
    let pivotValue = arr[pivot];
    for(let i = low; i < high; i++){
        let elem = arr[i];
        let greaterThanPivot = i > pivot;
        let greatherThanValue = elem > pivotValue;
        if((!greaterThanPivot && greatherThanValue ) || (greaterThanPivot && !greatherThanValue)){
            swap(arr, i, pivot);
            pivot = i;
        }
    }

    return pivot;
}

function swap(arr:any[], i1:number, i2:number){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    temp = null;
}

function generatePivot(low:number, high:number){
    return Math.round((high + low)/2);
}