export function diff(n1, n2) {
  const max = n1 > n2 ? n1 : n2;
  const min = n1 <= n2 ? n1 : n2;
  return max - min;
}
