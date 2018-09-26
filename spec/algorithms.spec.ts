import 'jasmine';
import { getContiguousMaxSum } from '../src/algorithms/contiguousMaxSum';
import { getLargestInProductModulus } from '../src/algorithms/largestIntegerProduct';

describe('algorithms', () => {
    describe('#Kadane\'s algorithm',() => {        
        it('should calculate the largest continguous sum', () => {
            const data = [2, -3, 4, -1, -2, 1, 6, 0, -30];
            let result = getContiguousMaxSum(data);
            expect(result.sum).toBe(8);
            expect(result.start).toBe(2);
            expect(result.end).toBe(7);
        });      

        it('should calculcate the largest contiguous sum w/ positive number at end', () => {
            const data = [-1, -4, -3, -5, -2, 5];
            let result = getContiguousMaxSum(data);
            expect(result.sum).toBe(5);
            expect(result.start).toEqual(result.end);
        });
        
        xit('should calculate the largest continguous sum for all negative integers', () => {
            const data = [-1, -4, -3, -5, -2, -10];
            let result  = getContiguousMaxSum(data);
            expect(result.sum).toBe(-1);
            expect(result.start).toEqual(result.end);

        });        
    });

    describe('largest integer in product', () => {
        it('should find the largest integer using modulus', () => {
            let result  = getLargestInProductModulus(25, 5);
            expect(result).toBe(5);
        });
    });
});