import { mergeSortRecursive } from 'sorting/merge-sort';
import "jasmine";

describe('Sorting tests', () => {
    const items = [
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

    describe('#Merge sort', () => {
        it('should correctly sort', () => {
            expect(mergeSortRecursive(items)).toEqual(sorted);
        });
    });
});