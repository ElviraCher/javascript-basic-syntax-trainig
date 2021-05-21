export function isTriangleRight(a, b, c) {
  const arr = [a, b, c].sort((x, y) => (x - y));
  return arr[2] ** 2 === arr[0] ** 2 + arr[1] ** 2;
}
