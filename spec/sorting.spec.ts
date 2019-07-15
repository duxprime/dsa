import { mergeSortRecursive } from '../src/sorting/merge-sort';
import { quickSort } from '../src/sorting/quick-sort';
import "jasmine";

describe('Sorting tests', () => {
    let items:number[];
    const sorted = [
        1,
        2,
        3,
        4,
        5,
        6,
        6,
        7,
        8,
        9
    ];
    beforeEach(() => {
       items = [
            5,
            1,
            9,
            4,
            2,
            7,
            6,
            6,
            3,
            8
        ];
    });

    describe('#Merge sort', () => {
        it('should correctly sort', () => {
            expect(mergeSortRecursive(items)).toEqual(sorted);
        });
    });

    describe('#Quick sort', () => {
        it('should correctly sort', () => {
            expect(quickSort(items)).toEqual(sorted);
        });
    });
});