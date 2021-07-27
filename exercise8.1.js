export function getDayOfWeek(input) {
  const [day, month, year] = input.split(".");
  const date = Date.parse(`${year}-${month}-${day}`);
  const dayOfWeek = new Date(date).getDay();
  switch (dayOfWeek) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return null;
  }
}
