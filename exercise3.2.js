export function getMultiplicationTable(num) {
  for (let i = 1; i <= 9; i += 1) {
    const result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  }
  if (!num) {
    console.log("Function should be called with a number");
  }
}
