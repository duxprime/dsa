import * as _ from 'lodash';
export function mergeSortRecursive<T>(items:T[]):T[]{
    if(items.length <= 1){
        return items;
    }

    let middle = Math.ceil(items.length / 2);
    let left = items.slice(0, middle);
    let right = items.slice(middle)
    let sortedLeft = mergeSortRecursive(left);
    let sortedRight = mergeSortRecursive(right);

    return merge(sortedLeft, sortedRight);
}

function merge<T>(left:T[], right:T[]){
    let merged:T[] = [];

    while(left.length > 0 || right.length > 0){
        let smallest;
        let leftItem = left[0];
        let rightItem = right[0];

        if(_.isUndefined(leftItem)){
            smallest = right.shift();
        }
        else if(_.isUndefined(rightItem)){
            smallest = left.shift()
        }
        else if(leftItem <= rightItem){
            smallest = left.shift();
        }
        else {
            smallest = right.shift();
        }

        merged.push(smallest);
    }

    return merged;
}