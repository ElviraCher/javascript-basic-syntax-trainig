function isTriangleRight(a, b, c) {
  const max = Math.max(a, b, c);
  const min = Math.min(a, b, c);
  let third;

  if (a !== min && a !== max) {
    third = a;
  } else if (b !== min && b !== max) {
    third = b;
  } else if (c !== min && c !== max) {
    third = c;
  }

  return max ** 2 === min ** 2 + third ** 2;
}

module.exports = isTriangleRight;
