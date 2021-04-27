const pow = require('./exercise6.3');

const values = [
    [2, 3, 8],
    [3, 3, 27],
    [3, 2, 9],
    [15, 1, 15],
]

values.forEach(([a, x, result]) => {
    it(`number ${a} in pow ${x} is ${result}` , () => {
        expect(pow(a, x)).toEqual(result);
    });
});

