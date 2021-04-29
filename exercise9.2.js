function getCircleLengthAndSquare(r) {
  const radius = parseInt(r, 10);
  const circleLength = 2 * Math.PI * radius;
  const square = Math.PI * radius ** 2;
  return [circleLength.toFixed(2), square.toFixed(2)];
}

module.exports = getCircleLengthAndSquare;
