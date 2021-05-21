export function getMonthName() {
  const num = prompt("Enter number from 1 to 12:", "");
  const nums = [undefined, "January", "February", "March", "April", "May",
    "June", "July", "August", "September", "November", "December"];
  console.log(nums[num]);
}
