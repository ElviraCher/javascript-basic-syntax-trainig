const findRootOfEquation = require('./evercise9.3');

const valuesWith2Roots = [
    ['2', '-3', '1', ['1.0', '0.5']],
    ['2', '3', '1', ['-0.5', '-1.0']],
    ['2', '7', '3', ['-0.5', '-3.0']],
    ['5', '12', '3', ['-0.3', '-2.1']]
]

valuesWith2Roots.forEach(([num1, num2, num3, result]) => {
    it(`equation has 2 real root ${result[0]} and ${result[1]}`, () => {
        expect(findRootOfEquation(num1, num2, num3)).toEqual(result);
    });
});

const valuesWith1Root = [
    ['9', '6', '1', '-0.33'],
    ['1', '-4', '4', '2.00'],
    ['9', '-12', '4', '0.67']
]

valuesWith1Root.forEach(([num1, num2, num3, result]) => {
    it(`equation has 1 real root ${result}`, () => {
        expect(findRootOfEquation(num1, num2, num3)).toEqual(result);
    });
});

    it('equation has no real roots', () => {
        expect(findRootOfEquation(5, 11, 18)).toBe('Since the discriminant is less than zero, the equation has no real solutions.')
    });


