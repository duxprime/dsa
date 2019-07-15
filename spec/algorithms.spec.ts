import { 
    getContiguousMaxSum,
    getLargestInProductModulus, 
    getLargestInProductString 
} from '@algo';

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

    describe('#largest integer in product', () => {
        const test = (fn:(num1:number, num2:number) => number) => {
            return () => {
                let result = fn(25, 5);
                expect(result).toEqual(5);
            };
        };

        it('should find the largest integer using modulus', test(getLargestInProductModulus));
        it('should find the largest integer using a string array', test(getLargestInProductString));
    });
});