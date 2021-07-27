export function getArithmeticMeanOfEveryOddNumbersFrom1ToN() {
  const n = prompt("Enter number", "");
  let count = 0;
  let sum = 0;

  for (let i = 1; i <= n; i += 2) {
    count += 1;
    sum += i;
  }
  console.log(sum / count);
}
