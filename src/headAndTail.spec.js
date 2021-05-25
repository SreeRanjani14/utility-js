const head = require('./headAndTail');

describe('Head', () => {

    it('Head of list [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('Head of list [] is null or undefined', () => {
        expect(head([])).toEqual(null || undefined);
    })
})