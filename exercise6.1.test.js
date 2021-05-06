import { diff } from "./exercise6.1";

it("return difference between higher and lower number", () => {
  expect(diff(6, 8)).toBe(2);
  expect(diff(-3, 5)).toBe(8);
  expect(diff(7, 7)).toBe(0);
});
