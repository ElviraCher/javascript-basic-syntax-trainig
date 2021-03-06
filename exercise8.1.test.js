import { getDayOfWeek } from "./exercise8.1";

describe("getDayOfWeek", () => {
  it("is a function", () => {
    expect(getDayOfWeek).toBeInstanceOf(Function);
  });

  const datesAndDays = [
    ["27.04.2020", "Monday"],
    ["09.03.1994", "Wednesday"],
    ["31.12.2020", "Thursday"],
    ["16.06.2013", "Sunday"],
    ["08.04.2008", "Tuesday"],
  ];
  datesAndDays.forEach(([input, dayOfWeek]) => {
    it(`${input} is ${dayOfWeek}`, () => {
      expect(getDayOfWeek(input)).toBe(dayOfWeek);
    });
  });
});
