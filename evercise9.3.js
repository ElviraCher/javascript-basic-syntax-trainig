function findRootOfEquation (num1, num2, num3) {
    let a = parseInt(num1);
    let b = parseInt(num2);
    let c = parseInt(num3);

    const d = ((b ** 2) - (4 * a * c));

    if (d === 0) {
        let x = -(b / (2 * a));
        return x.toFixed(2);
    } else if (d > 0) {
        let x1 = ((-b + Math.sqrt(d)) / (2 * a));
        let x2 = ((-b - Math.sqrt(d)) / (2 * a));
        return [x1.toFixed(1), x2.toFixed(1)];
    } else if (d < 0) {
        return 'Since the discriminant is less than zero, the equation has no real solutions.';
    }
}

module.exports = findRootOfEquation;
