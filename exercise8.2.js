export function getTodayPassMinutes() {
  const now = new Date();
  const hrs = now.getHours();
  const mins = now.getMinutes();

  console.log(hrs * 60 + mins);
}
