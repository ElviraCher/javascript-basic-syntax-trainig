export function getMultiplicationTable(number) {
  for (let i = 1; i <= 9; i += 1) {
    const result = number * i;
    console.log(`${number} * ${i} = ${result}`);
  }
  if (!number) {
    console.log("Function should be called with a number");
  }
}
