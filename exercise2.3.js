export function isCircleFitInSquare(circle, square) {
  const diameter = 2 * Math.sqrt(circle / Math.PI);
  const sideOfSquare = Math.sqrt(square);

  return diameter <= sideOfSquare;
}
