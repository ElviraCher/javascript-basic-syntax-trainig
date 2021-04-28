function getCircleLengthAndSquare(r) {
    let radius = parseInt(r);
    let circleLength = 2 * Math.PI * radius;
    let square = Math.PI * (radius ** 2);
    return [circleLength.toFixed(2), square.toFixed(2)];
}

module.exports = getCircleLengthAndSquare;
