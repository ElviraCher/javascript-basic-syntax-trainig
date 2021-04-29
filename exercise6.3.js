function pow(a, x) {
  return x === 1 ? a : a * pow(a, x - 1);
}

module.exports = pow;
