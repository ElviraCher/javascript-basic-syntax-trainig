export function sumOfNums() {
  const answer = prompt("Enter a three-digit number:", "253");

  const answerSplit = answer.split("");
  let result = 0;
  for (let i = 0; i < answerSplit.length; i += 1) {
    result += +answerSplit[i];
  }
  if (!result) {
    console.log("Unexpected input. You should input number");
    return;
  }
  console.log(result);
}
