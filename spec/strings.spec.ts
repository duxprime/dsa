import { findSmallestDivisor } from '@algo';

describe('String tests', () => {
    describe('#Smallest divisor', () => {
        it('should find the smallest divisor w/ no repetition', () => {
            const input = 'lrbb';
            const divisor = 'lrbb';
            expect(findSmallestDivisor(input, divisor)).toEqual(4);
        });
        
        it('should find the smallest divisor w/ repeated pattern', () => {
            const input = 'rbrb';
            const divisor = 'rbrb';
            expect(findSmallestDivisor(input, divisor)).toEqual(2);
        });
    });
});