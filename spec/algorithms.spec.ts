import { getContiguousMaxSum } from '../src/algorithms/contiguousMaxSum';
import 'jasmine';

describe('algorithms', () => {
    describe('#Kadane\'s algorithm',() => {        
        it('should calculate the largest continguous sum', () => {
            const data = [2, -3, 4, -1, -2, 1, 6, 0, -3];
            let result = getContiguousMaxSum(data);
            expect(result.sum).toBe(8);
            expect(result.start).toBe(2);
            expect(result.end).toBe(7);
        });      
        
        it('should calculate the largest continguous sum for all negative integers', () => {
            const data = [-1, -4, -3, -5, -2, -10];
            let result  = getContiguousMaxSum(data);
            expect(result.sum).toBe(-1);
            expect(result.start).toEqual(result.end);

        });        
    });
});