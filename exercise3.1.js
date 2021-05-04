export function sumOfAllIntegers(first, last) {
  let sum = 0;
  for (let i = first; i <= last; i += 1) {
    sum += i;
  }
  console.log(sum);
}
