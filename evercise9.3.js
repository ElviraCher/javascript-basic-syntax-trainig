function findRootOfEquation(num1, num2, num3) {
  const a = parseInt(num1, 10);
  const b = parseInt(num2, 10);
  const c = parseInt(num3, 10);

  const d = b ** 2 - 4 * a * c;

  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1.toFixed(1), x2.toFixed(1)];
  }
  if (d < 0) {
    return "Since the discriminant is less than zero, the equation has no real solutions.";
  }
  const x = -(b / (2 * a));
  return x.toFixed(2);
}

module.exports = findRootOfEquation;
