import { mergeSortRecursive } from '../src/sorting/merge-sort-recursive';
import "jasmine";

describe('Sorting tests', () => {
    describe('#Merge sort', () => {
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
        it('should correctly sort', () => {
            let sorted = [
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

            expect(mergeSortRecursive(items)).toEqual(sorted);
        });
    });
});