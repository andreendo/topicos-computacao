const NumFinder = require('../lib/numfinder');
const numFinder = new NumFinder();

describe('NumFinder', () => {
    test('works with ordered array', () => {
        numFinder.find([1, 10]);
        expect(numFinder.smallest).toBe(1);
        expect(numFinder.largest).toBe(10);
    });

    test('works with unordered array', () => {
        numFinder.find([50, 1, 10, 5]);
        expect(numFinder.smallest).toBe(1);
        expect(numFinder.largest).toBe(50);
    });

    test('throws an error with an empty array', () => {
        expect(() => {
            numFinder.find([]);
        }).toThrow('empty array');
    });

    test('throws an error with an array containing non-numbers', () => {
        expect(() => {
            numFinder.find([1, 2, 4, 'abc', 10]);
        }).toThrow('invalid array');
    });

    test('throws an error with an array containing non-numbers - 2', () => {
        expect(() => {
            numFinder.find([1, 2, 4, 'abc', 10]);
        }).toThrow('invalid array');

        expect(numFinder.largest).toBe(Number.NEGATIVE_INFINITY);
        expect(numFinder.smallest).toBe(Number.POSITIVE_INFINITY);
    });

    test('does not keep state of a previous find', () => {        
        numFinder.find([50, 1, 10, 5]); //previous state
        numFinder.find([2, 4]);        
        expect(numFinder.smallest).toBe(2);
        expect(numFinder.largest).toBe(4);
    });

});