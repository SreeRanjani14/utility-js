const tail = require('./tail');

describe('Tail', () => {
    it('Tail of list [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    })
    it('Tail of list [] is null or undefined', () => {
        expect(tail([])).toEqual(null || undefined);
    }) 
})